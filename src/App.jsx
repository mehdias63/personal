import React from 'react'
import Header from './components/header'
import About from './components/about'
import Intro from './components/intro'
import News from './components/news'
import Services from './components/services'
import Order from './components/order'
import Footer from './components/footer'
import Bootstrap  from 'bootstrap/dist/css/bootstrap.css'

function App() {
  
  return (
    <>
      <div>
      <Header />
      <About />
      <Intro />
      <News />
      <Services />
      <Order />
      <Footer />
      </div>
    </>
  )
}

export default App
