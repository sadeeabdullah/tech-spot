import { CardElement,  useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from '../../Hooks/useAxiosSecure'
// import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import React from 'react';

const CheckOutForm = () => {
  const [ error, setError] = useState('');
  const [clientSecret , setClientSecret] = useState('')
  const [transactionId , setTransactionId] =useState('');
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure();
    const axiosPublic = useAxiosPublic();
    const {user} = UseAuth();
    const navigate = useNavigate();
    const totalPrice = 99

    useEffect(()=>{
      if(totalPrice>0){
        axiosSecure.post('/create-payment-intent',{price:totalPrice})
        .then(res=>{
          console.log(res.data.clientSecret)
          setClientSecret(res.data.clientSecret)
        })
      }
        
    },[axiosSecure,totalPrice])


    const handleSubmit = async(event) =>{
        event.preventDefault();
        if(!stripe || !elements){
            return;
        }
        const card = elements.getElement(CardElement)
        if(card === null){
            return;
        }
    const {error,paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card
    })
    if(error){
      console.log('payment error',error)
      setError(error.message)
    }
    else{
      console.log('payment method', paymentMethod)
      setError('')
    }


    // confirm payment
    const {paymentIntent,error:confirmError} = await stripe.confirmCardPayment(clientSecret,{
      payment_method:{
        card: card,
        billing_details:{
          email: user?.email || 'anonymous',
          name: user?.displayName || 'anonymous'
        }
      }
    })
    if (confirmError) {
      console.log("confirm error")
    }
    else{
      console.log('payment intent', paymentIntent)
      if (paymentIntent.status === 'succeeded') {
        console.log('transaction id', paymentIntent.id)
        setTransactionId(paymentIntent.id)


        // now save the payment in the database
        const payment = {
          email:user.email,
          price : totalPrice,
          transactionId:paymentIntent.id,
          date : new Date(), //utc date convert. use moment js to covert the time
          status:'paid'
        }
        const res = await axiosPublic.post('/payments',payment)
        console.log(res.data)
        if (res.data?.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Thank for doing payment",
            showConfirmButton: false,
            timer: 1500
          });
          navigate('/dashboard/userProfile')
        }
      }
    }


       
      //     Swal.fire({
      //       position: "top-end",
      //       icon: "success",
      //       title: "Thanks for doing payment",
      //       showConfirmButton: false,
      //       timer: 1500
      //     });
      //     navigate('/')
      //   }
      // }
    




    }
    return (
       <form onSubmit={handleSubmit} >
        <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button className="btn btn-primary" type="submit" disabled={!stripe || !clientSecret}>
        Pay
      </button>
      <p className="text-red-600">{error}</p>
      {transactionId && <p className="text-emerald-500">Your transaction id: {transactionId} </p>}
       </form>
    );
};

export default CheckOutForm;