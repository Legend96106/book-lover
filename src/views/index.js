import React from "react";
import Experience from "./Experience";
import AboutMe from "./AboutMe";
import Services from "./Services";
import Counter from "./Counter";
import Portfolio from "./Portfolio";
import Testimonials from "./Testimonials";
import Contact from "./Contact";

const Home = () => (
    <div className="home">
        <AboutMe />
        <Experience />
        <Services />
        <Counter />
        <Portfolio />
        <Testimonials />
        <Contact />
    </div>
);

export default Home;