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
        <div className="content" id="about">
            <TopCard label="About" />
            <div className="cuadro-text">
                <div>
                    <h3>{subtitle}</h3>
                </div>
                <div>
                    <h1>{title}</h1>
                    <p>{content}</p>
                </div>
                <div>
                    <ButtonLink label="LEARN MORE" href="" />
                </div>
                <div className="img">
                    <img src={img01} alt="" />
                </div>
            </div>
        </div>
    );
};

export { About };
