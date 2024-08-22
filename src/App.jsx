import { useState } from 'react'
import Header from './Component/Header'
import QuoteGenerator from './Component/QuoteGenerator'
import Footer from './Component/Footer'
import './App.css'
import './Component/Main.css'

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
