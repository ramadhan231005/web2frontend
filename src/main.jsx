import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { GoogleOAuthProvider } from '@react-oauth/google'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Masukkan Client ID yang kamu salin dari Google Cloud ke sini */}
    <GoogleOAuthProvider clientId="67623550516-709fngsdn1d3hnf9p4p9oih5d54pp9j4.apps.googleusercontent.com">
      <App />
    </GoogleOAuthProvider>
  </React.StrictMode>,
)

