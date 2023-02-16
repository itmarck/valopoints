import { App as Antd, ConfigProvider } from 'antd'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './components/App/index'

import './style.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ConfigProvider componentSize="small">
      <Antd>
        <App />
      </Antd>
    </ConfigProvider>
  </React.StrictMode>,
)
