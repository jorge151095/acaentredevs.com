import React from 'react';
import './social-media-card.scss';
import facebook from './../../../assets/Fb.png';
import insta from './../../../assets/Insta.png';
import twitter from './../../../assets/Twitter.png';
import youtube from './../../../assets/Youtube.png';

interface ISocialMedia {
    href: string;
}

const SocialMediaCard: React.FC<ISocialMedia> = ({ href }) => {
    return (
        <div className="member-social-holder" data-jarallax-element="0 -30">
            <div className="social">
                <a href="https://www.facebook.com/acaentredevs">
                    <img src={facebook} alt="facebook" />
                </a>
            </div>

            <div className="social">
                <a href="https://www.instagram.com/acaentredevs/">
                    <img src={insta} alt="instagram" />
                </a>
            </div>

            <div className="social">
                <a href="https://twitter.com/acaentredevs">
                    <img src={twitter} alt="twitter" />
                </a>
            </div>

            <div className="social">
                <a href="https://www.youtube.com/@acaentredevs">
                    <img src={youtube} alt="youtube" />
                </a>
            </div>
        </div>
    );
};

export { SocialMediaCard };
