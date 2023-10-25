import React from 'react'
import Header from './components/Header/header'
import About from './components/About/about'
import Intro from './components/Intro/intro'
import News from './components/News/news'
import Services from './components/Services/services'
import Order from './components/Order/order'
import Footer from './components/footer'
import Button from './components/Button'
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
      <Button />
      </div>
    </>
  )
}

export default App
