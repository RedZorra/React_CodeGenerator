import { useState } from 'react'
import Header from './Componente/Header'
import QuoteGenerator from './Componente/QuoteGenerator'
import Footer from './Componente/Footer'
import './App.css'
import './Componente/Main.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <QuoteGenerator />
      <Footer />
    </>
  )
}

export default App
