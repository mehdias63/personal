import React from "react";
import Header from "./components/Header/Header";
import About from "./components/About/about";
import Intro from "./components/Intro/Intro";
import News from "./components/News/News";
import Services from "./components/Services/Services";
import Order from "./components/Order/Order";
import Footer from "./components/Footer/Footer";
import Button from "./components/Button/Button";
import Rate from "./components/Rate/Rate";
import Bootstrap from "bootstrap/dist/css/bootstrap.css";

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
        <Rate />
        <Footer />
        <Button />
      </div>
    </>
  );
}

export default App;
