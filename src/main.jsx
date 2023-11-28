
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Route from './Routes/Route.jsx'
import {  HelmetProvider } from 'react-helmet-async';
import AuthProvider from './Provider/AuthProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <HelmetProvider>
    <div >
    <AuthProvider>
  <RouterProvider router={Route}>
  </RouterProvider>
  </AuthProvider>
    </div>
  </HelmetProvider>
)
