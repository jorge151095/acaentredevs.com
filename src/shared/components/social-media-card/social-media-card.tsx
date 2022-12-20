import React from 'react';
import './social-media-card.scss';
import facebook from '../../../assets/icons/Fb.png';
import insta from '../../../assets/icons/Insta.png';
//import twitter from '../../../assets/icons/Twitter.png';
//import youtube from '../../../assets/icons/Youtube.png';

interface ISocialMedia {
    instagramUrl?: string;
    facebookUrl?: string;
}

const SocialMediaCard: React.FC<ISocialMedia> = ({ instagramUrl, facebookUrl }) => {
    return (
        <div className="member big-screen member-right">
            <div className="member-info">
                <div className="member-content">
                    <div
                        className="member-social-holder"
                        data-jarallax-element="0 -30"
                    >
                        {facebookUrl && <div className="social">
                            <a href="https://www.facebook.com/acaentredevs">
                                <img src={facebook} alt="facebook" />
                            </a>
                        </div>}

                        {instagramUrl && <div className="social">
                            <a href={instagramUrl}>
                                <img src={insta} alt="instagram" />
                            </a>
                        </div>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export { SocialMediaCard };
