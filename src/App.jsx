import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import { LanguageProvider } from './contexts/LanguageContext'
import Header from './components/Header'
import Footer from './components/Footer'

// Páginas
import Home from './pages/Home'
// import Login from './pages/Login' 
//import Cadastro from './pages/Cadastro'
import Racas from './pages/Racas'
import Servicos from './pages/Servicos'
//import Planos from './pages/Planos'
//import Pedidos from './pages/Pedidos'
//import DashboardCliente from './pages/DashboardCliente'
//import DashboardComerciante from './pages/DashboardComerciante'
import Contato from './pages/Contato'
import Sobre from './pages/Sobre'

import './App.css'

function App() {
  return (
    <LanguageProvider>
      <AuthProvider>
        <Router>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Home />} />
                {/* <Route path="/login" element={<Login />} />
                <Route path="/cadastro" element={<Cadastro />} /> */}
                <Route path="/racas" element={<Racas />} />
                <Route path="/servicos" element={<Servicos />} />
                {/* <Route path="/planos" element={<Planos />} /> */}
                {/* <Route path="/pedidos" element={<Pedidos />} /> */}
                {/* <Route path="/dashboard-cliente" element={<DashboardCliente />} /> */}
                {/* <Route path="/dashboard-comerciante" element={<DashboardComerciante />} /> */}
                <Route path="/contato" element={<Contato />} />
                <Route path="/sobre" element={<Sobre />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </AuthProvider>
    </LanguageProvider>
  )
}

export default App

