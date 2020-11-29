import React from 'react'

const CallToAction = (props) => {
    // let contentData = require('../../content-data.json');
    let contentData = props.props;
    return (
        <div>
            <section id="cta" className="cta">
                <div className="container aos-init aos-animate" data-aos="zoom-in">

                    <div className="text-center">
                        <h3>{contentData.title}</h3>
                        <p> {contentData.text} </p>
                        <a className="cta-btn" href="#">{contentData.button}</a>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default CallToAction;