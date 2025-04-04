import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'lenis/dist/lenis.css'
import Chat from './Components/Chat.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Chat /> */}
  </StrictMode>,
)
