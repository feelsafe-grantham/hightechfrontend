import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import { SnackbarProvider } from './Operations/Alert.tsx'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SnackbarProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </SnackbarProvider>
  </StrictMode>,
)
