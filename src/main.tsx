import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes } from 'react-router-dom'

import App from './App'

import 'antd/dist/antd.css'
import 'normalize.css'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
