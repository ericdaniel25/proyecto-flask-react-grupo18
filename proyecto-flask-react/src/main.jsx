import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './global.css'
/* import App from './App.jsx' */
import DelateUsers from './pages/DelateUsers.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <DelateUsers/>
  </StrictMode>,
)
