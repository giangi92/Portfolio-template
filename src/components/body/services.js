import React from 'react';

const Services = (props) => {
    // let contentData = require('../../content-data.json');
    let contentData = props.props;
    return (
        <div>
            <section id="services" className="section services">
                <div className="container aos-init aos-animate" data-aos="fade-up">

                    <div className="section-title">
                    <h2>{contentData.section_subtitle}</h2>
                    <p>{contentData.section_title}</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch aos-init aos-animate" data-aos="zoom-in" data-aos-delay="100">
                            <div className="icon-box">
                            <div className="icon"><i className="bx ri-basketball-line"></i></div>
                            <h4><a href="">{contentData.title1}</a></h4>
                            <p>{contentData.text1}</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0 aos-init aos-animate" data-aos="zoom-in" data-aos-delay="200">
                            <div className="icon-box">
                            <div className="icon"><i className="bx ri-file-line"></i></div>
                            <h4><a href="">{contentData.title2}</a></h4>
                            <p>{contentData.text2}</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0 aos-init aos-animate" data-aos="zoom-in" data-aos-delay="300">
                            <div className="icon-box">
                            <div className="icon"><i className="bx ri-dashboard-2-line"></i></div>
                            <h4><a href="">{contentData.title3}</a></h4>
                            <p>{contentData.text3}</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 aos-init" data-aos="zoom-in" data-aos-delay="100">
                            <div className="icon-box">
                            <div className="icon"><i className="bx ri-global-line"></i></div>
                            <h4><a href="">{contentData.title4}</a></h4>
                            <p>{contentData.text4}</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 aos-init" data-aos="zoom-in" data-aos-delay="200">
                            <div className="icon-box">
                            <div className="icon"><i className="bx ri-focus-3-line"></i></div>
                            <h4><a href="">{contentData.title5}</a></h4>
                            <p>{contentData.text5}</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 aos-init" data-aos="zoom-in" data-aos-delay="300">
                            <div className="icon-box">
                            <div className="icon"><i className="bx ri-user-3-line"></i></div>
                            <h4><a href="">{contentData.title6}</a></h4>
                            <p>{contentData.text6}</p>
                            </div>
                        </div>

                    </div>

                </div>
            </section>

        </div>
    )
}

export default Services;