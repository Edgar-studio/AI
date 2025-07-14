import React from "react"
import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import AITools from "../components/AITools.jsx";
import Testimonial from "../components/Testimonial.jsx";
import Plan from "../components/Plan.jsx";

const Home = () => {
    return (
        <>
          <Navbar />
          <Hero />
          <AITools />
          <Testimonial />
          <Plan />
        </>
    )
}

export default Home;
