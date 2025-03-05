import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Routers from './router'

const rootEl = document.getElementById('root')
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl)
  root.render(
    <React.StrictMode>
      <Routers />
    </React.StrictMode>,
  )
}
