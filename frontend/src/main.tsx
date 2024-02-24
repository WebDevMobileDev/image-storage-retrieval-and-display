import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import SchoolContextProvider from './context/schoolContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SchoolContextProvider>
    <App />
    </SchoolContextProvider>
  </React.StrictMode>,
)
