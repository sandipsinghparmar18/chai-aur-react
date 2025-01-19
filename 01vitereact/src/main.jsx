import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'

const user="click me to "
const reactElement=React.createElement(
  'a',
  {href:"https://google.com",target:"_blanck"},
  user,
  'visit google'
)

createRoot(document.getElementById('root')).render(
  
    reactElement
  
)
