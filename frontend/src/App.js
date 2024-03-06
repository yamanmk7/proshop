import React from 'react'
import { Container } from 'react-bootstrap'
import Router from './routes/Router'
import Footer from './component/Footer'
import Header from './component/Header'


const App = () => {
  return (
    <>
    
    <main className="py-3">
      <Router/>
    </main>
   <Footer/>
    </>
  )
}

export default App
