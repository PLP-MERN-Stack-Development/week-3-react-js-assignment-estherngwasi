import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

// Optional: import ThemeProvider if you're using Context API for theme
// import { ThemeProvider } from './context/ThemeContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      {/* Wrap with your ThemeProvider if implemented */}
      {/* <ThemeProvider> */}
        <App />
      {/* </ThemeProvider> */}
    </BrowserRouter>
  </StrictMode>,
)
