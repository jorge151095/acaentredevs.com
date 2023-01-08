import React from 'react';
import './social-media-card.scss';
import facebook from '../../../assets/icons/Fb.png';
import insta from '../../../assets/icons/Insta.png';
import twitter from '../../../assets/icons/Twitter.png';
import youtube from '../../../assets/icons/Youtube.png';
import linkedin from '../../../assets/icons/linkedin.png';

interface ISocialMedia {
    instagramUrl?: string;
    facebookUrl?: string;
    twitterUrl?: string;
    youtubeUrl?: string;
    linkedinUrl?: string;
    hasBackgroud?: boolean;
}

const SocialMediaCard: React.FC<ISocialMedia> = ({
    instagramUrl,
    facebookUrl,
    twitterUrl,
    youtubeUrl,
    linkedinUrl,
    hasBackgroud,
}) => {
    return (
        <div className="member big-screen member-right">
            <div
                className={`member-social-holder ${
                    !hasBackgroud && 'is-transparent'
                }`}
                data-jarallax-element="0 -30"
            >
                {facebookUrl && (
                    <div className="social">
                        <a href="https://www.facebook.com/acaentredevs">
                            <img src={facebook} alt="facebook" />
                        </a>
                    </div>
                )}

                {instagramUrl && (
                    <div className="social">
                        <a href={instagramUrl}>
                            <img src={insta} alt="instagram" />
                        </a>
                    </div>
                )}
                {twitterUrl && (
                    <div className="social">
                        <a href={twitterUrl}>
                            <img src={twitter} alt="twitter" />
                        </a>
                    </div>
                )}
                {youtubeUrl && (
                    <div className="social">
                        <a href={youtubeUrl}>
                            <img src={youtube} alt="youtube" />
                        </a>
                    </div>
                )}
                {linkedinUrl && (
                    <div className="social">
                        <a href={linkedinUrl}>
                            <img src={linkedin} alt="linkedin" />
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
};

export { SocialMediaCard };
