import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"; 
import { AuthProvider } from "./Context/AuthContext.jsx"; 

createRoot(document.getElementById('root')).render(
  <AuthProvider>  {/* ✅ Wrap your App inside AuthProvider */}
  <App />
  </AuthProvider> 
)
