import React from 'react';
import './contacto.scss';
import { TopCard } from '../../components/top-card/top-card';
import { SocialMediaCard } from '../../components/social-media-card/social-media-card';
interface IContact {
    title: string;
    content: string;
    subtitulo: string;
}

const Contact: React.FC<IContact> = ({ title, content, subtitulo }) => {
    return (
        <div className="contact_content" id="contact">
            <TopCard label="CONTACTO" />
            <div className="contact__caja">
                <div className="contact__text">
                    <h3 className="contact__text--subtitulo">{subtitulo}</h3>
                    <h1 className="contact__text--title">{title}</h1>
                    <p>{content}</p>

                    <SocialMediaCard
                        instagramUrl="https://www.instagram.com/acaentredevs/"
                        facebookUrl="https://www.facebook.com/acaentredevs"
                        twitterUrl="https://twitter.com/acaentredevs"
                        youtubeUrl="https://www.youtube.com/@acaentredevs"
                    />
                </div>
            </div>
        </div>
    );
};

export { Contact };
