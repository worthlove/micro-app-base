import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from "react-router-dom"
import 'reset-css'
import App from './App.tsx'
import './index.css'
import microApp from '@micro-zoe/micro-app'
import 'antd/dist/antd'

microApp.start()

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </React.StrictMode>
)
