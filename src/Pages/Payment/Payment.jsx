import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";
import React from 'react';


const Payment = () => {
    const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_pk)
    return (
        <div>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckOutForm></CheckOutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;