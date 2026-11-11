import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/app/App'
import { BrowserRouter } from 'react-router-dom'
import Auth from './components/auth/auth/Auth'
import { Provider as Redux } from 'react-redux'
import store from './redux/store'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Auth>
        <Redux store={store}>
          <App />
        </Redux>
      </Auth>
    </BrowserRouter>
  </StrictMode>
)
