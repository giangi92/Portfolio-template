import React from 'react';
import { SocialIcon } from 'react-social-icons';

const SocialIcons = () => {
    return (
        <div>
            <SocialIcon url="http://twitter.com/giangi92" style={{ height: 30, width: 30, margin: 2.5 }} />
            <SocialIcon url="http://github.com/" style={{ height: 30, width: 30, margin: 2.5 }} />
            <SocialIcon url="http://instagram.com/" bgColor="#DB445D" style={{ height: 30, width: 30, margin: 2.5 }} />
            <SocialIcon url="http://linkedin.com/" style={{ height: 30, width: 30, margin: 2.5 }} />
        </div>
    )
}

export default SocialIcons;