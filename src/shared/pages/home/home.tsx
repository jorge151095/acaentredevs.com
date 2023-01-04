import React from 'react';
import './home.scss';
import { ButtonLink } from '../../components/button-link/button-link';

interface IHome {
    title: string;
}

const Home: React.FC<IHome> = ({ title }) => {
    return (
        <div className="home__container" id="home">
            <div className="home__content--color ">
                <h1 className="title-prin">{title}</h1>
                <ButtonLink label="LEARN MORE" href="#service" />
            </div>
        </div>
    );
};

export { Home };
