import React from 'react';
import './about.scss';
import { TopCard } from '../../components/top-card/top-card';
import { ButtonLink } from '../../components/button-link/button-link';
import img01 from '../../../assets/imagblog/img.png';
interface IAbout {
    title: string;
    content: string;
    subtitle: string;
}

const About: React.FC<IAbout> = ({ title, content, subtitle }) => {
    return (
        <div className="about" id="about">
            <TopCard label="ABOUT" />
            <div className="container">
                <div className="text">
                    <h3 className="subtitulo">{subtitle}</h3>
                    <h1 className="titulo">{title}</h1>
                    <p>{content}</p>
                    <div className="button">
                        <ButtonLink label="LEARN MORE" href="" />
                    </div>
                </div>

                <div className="about__img">
                    <img src={img01} alt="" />
                </div>
            </div>
        </div>
    );
};

export { About };
