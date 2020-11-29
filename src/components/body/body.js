import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'remixicon/fonts/remixicon.css'
import About from './about';
import Features from './features';
import Services from './services';
import CallToAction from './call-to-action';
import Contacts from './contacts';

const Body = () => {

    AOS.init({duration:1000});

    let contentData = require('../../content-data.json');

    return (
        <div>
            <section id="img_principale" className="d-flex align-items-center justify-content-center">
                <div data-aos="fade-up" className="container row justify-content-center">
                    <div className="col-xl-6 col-lg-8">
                        <h1>{contentData.section1.title}</h1>
                        <h2>{contentData.section1.subtitle}</h2>
                    </div>
                </div>
            </section>
            
            <About></About>
            <Features></Features>
            <Services></Services>
            <CallToAction></CallToAction>
            <Contacts></Contacts>
            
        </div>
    )
}

export default Body;