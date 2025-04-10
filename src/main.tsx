import './index.css'
import App from './App.tsx'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { SnackbarProvider } from './Operations/Alert.tsx'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <SnackbarProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </SnackbarProvider>
    </HelmetProvider>
  </StrictMode>,
)
