import React from "react";
// import Navbar from "./Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Services from "./components/services/Services";
import Banner from "./components/Banner/Banner";
import Subscribe from "./components/subscribe/Subscribe";
import Banner2 from "./components/Banner/Banner2";
import Footer from "./components/Footer/Footer";
const App = () =>{
  return(
  <div className="overflow-x-hidden bg-white text-dark">
    {/* <Navbar /> */}
    <Hero />
    <Services />
    <Banner />
    <Subscribe />
    <Banner2 />
    <Footer />
    </div>
  )
}

export default App;