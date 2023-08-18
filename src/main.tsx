import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import CallbackPage from './components/CallbackPage.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path='/' element={App} />
        <Route path='/callback' element={CallbackPage} />
      </Routes>

    </React.StrictMode>
  </BrowserRouter>,
)
