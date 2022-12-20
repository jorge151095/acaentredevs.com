import React from 'react';
import './social-media-card.scss';
import facebook from '../../../assets/icons/Fb.png';
import insta from '../../../assets/icons/Insta.png';
import twitter from '../../../assets/icons/Twitter.png';
import youtube from '../../../assets/icons/Youtube.png';

interface ISocialMedia {
    href: string;
}

const SocialMediaCard: React.FC<ISocialMedia> = ({ href }) => {
    return (
        <div className="member big-screen member-right">
            <div className="member-info">
                <div className="member-content">
                    <div
                        className="member-social-holder"
                        data-jarallax-element="0 -30"
                    >
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
                </div>
            </div>
        </div>
    );
};

export { SocialMediaCard };
