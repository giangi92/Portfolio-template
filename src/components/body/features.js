import React from 'react'
import image1 from '../../media/img/keyboard.jpg'

const Features = (props) => {
    //let contentData = require('../../content-data.json');
    let contentData = props.props;
    return (
        <div>
             <section id="features" className="container features section main">
                <div className="container" data-aos="fade-up">

                    <div className="row">
                        
                        <div className="bkg-image col-lg-6 " style={{backgroundImage:"url("+image1+")"}} data-aos="fade-right"></div> 
                    
                        <div className="col-lg-6 " data-aos="fade-left" data-aos-delay="100">
                            <div className="icon-box mt-5 mt-lg-0 " data-aos="zoom-in" data-aos-delay="150">
                                <i className="bx ri-file-paper-2-line"></i>
                                <h4>{contentData.title1}</h4>
                                <p>{contentData.text1}</p>
                            </div>
                            <div className="icon-box mt-5 " data-aos="zoom-in" data-aos-delay="150">
                                <i className="bx ri-edit-box-line"></i>
                                <h4>{contentData.title2}</h4>
                                <p>{contentData.text2}</p>
                            </div>
                            <div className="icon-box mt-5 " data-aos="zoom-in" data-aos-delay="150">
                                <i className="bx ri-gallery-line"></i>
                                <h4>{contentData.title3}</h4>
                                <p>{contentData.text3}</p>
                            </div>
                            <div className="icon-box mt-5 " data-aos="zoom-in" data-aos-delay="150">
                                <i className="bx ri-shield-line"></i>
                                <h4>{contentData.title4}</h4>
                                <p>{contentData.text4}</p>
                            </div>
                        </div>
                       
                    </div>

                </div>
            </section>

        </div>
    )
}

export default Features;