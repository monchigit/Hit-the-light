import './indexPhone.css'
import './indexLaptops.css'
import App from './App.jsx'
import { createRoot } from 'react-dom/client'
import { GameProvider } from './context/statusContext.jsx'
import { Footer } from './components/Footer'


createRoot(document.getElementById('root')).render(
  <GameProvider>
    <App />
    <Footer />
  </GameProvider>
)
