import React from 'react';
import './presentation-card.scss';
import img1 from '../../../assets/imagblog/img.png';

interface IPresentation {
    subtitle: string;
    content: string;
    role: string;
}

const PresentationCard: React.FC<IPresentation> = ({
    role,
    content,
    subtitle,
}) => {
    return (
        <div id="team" className="section">
            <div className="section-wrapper block content-1170 center-relative">
                <div className="content-wrapper">
                    <div className="member member-left">
                        <img
                            src={img1}
                            alt=""
                            data-threshold="0 0"
                            data-jarallax-element="60 0"
                        />
                        <div className="member-info">
                            <p className="member-postition">{role}</p>
                            <h5 className="member-name">{subtitle}</h5>
                            <div className="member-content">
                                <p>{content}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export { PresentationCard };
