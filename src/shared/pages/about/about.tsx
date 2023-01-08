import React from 'react';
import './about.scss';
import { TopCard } from '../../components/top-card/top-card';
import { ButtonLink } from '../../components/button-link/button-link';
import acaentredevs from '../../../assets/img/acaentredevs.png';
interface IAbout {
    title: string;
    content: string;
    subtitle: string;
}

const About: React.FC<IAbout> = ({ title, content, subtitle }) => {
    return (
        <div className="about" id="about">
            <TopCard label="ACERCA DE" />
            <div className="container">
                <div className="text">
                    <h3 className="subtitulo">{subtitle}</h3>
                    <h1 className="titulo">{title}</h1>
                    <p>{content}</p>
                    <div className="button">
                        <ButtonLink label="CONOCER MÁS" href="https://www.linkedin.com/company/ac%C3%A1-entre-devs" />
                    </div>
                </div>

                <div className="about__img">
                    <a href='https://www.youtube.com/channel/UCUACIYdXXbN1d7t1XW4dK8A'><img src={acaentredevs} alt="acaentredevs logo" /></a>
                </div>
            </div>
        </div>
    );
};

export { About };
