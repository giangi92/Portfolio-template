import React from 'react'
import image1 from '../../media/img/3dtechnology.jpg'

const About = (props) => {
    let contentData = props.props;
    
    return (
        <div>
            <div id="about" className="container section main">
                <div data-aos="fade-right" className="row">
                    <div className="col-lg-6 order-1 order-lg-2" data-aos="fade-left" data-aos-delay="100">
                        <img src={image1} className="img-fluid" alt="" />
                    </div>
                    <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content" data-aos="fade-right" data-aos-delay="100">
                        <h3>{contentData.title}</h3>
                        <p className="font-italic">
                            {contentData.text1}
                        </p>
                        <ul>
                        <li><i className="ri-check-double-line"></i> {contentData.list1}</li>
                        <li><i className="ri-check-double-line"></i> {contentData.list2}</li>
                        <li><i className="ri-check-double-line"></i> {contentData.list3}</li>
                        </ul>
                        <p>
                            {contentData.text2}
                        </p>
                    </div>
                    </div>
            </div>
        </div>
    )
}

export default About;