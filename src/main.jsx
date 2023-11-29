
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Route from './Routes/Route.jsx'
import {  HelmetProvider } from 'react-helmet-async';
import AuthProvider from './Provider/AuthProvider.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';



const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
    <div >
    <AuthProvider>
  <RouterProvider router={Route}>
  </RouterProvider>
  </AuthProvider>
    </div>
  </HelmetProvider>
  </QueryClientProvider>
  
)
