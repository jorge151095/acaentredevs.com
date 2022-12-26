import React from 'react';
import './home.scss';
import { ButtonLink } from '../../components/button-link/button-link';

interface IHome {
    title: string;
}

const Home: React.FC<IHome> = ({ title }) => {
    return (
        <div className="container">
            <div className="content-color ">
                <h1>{title}</h1>
                <ButtonLink label="LEARN MORE" href="#service" />
            </div>
        </div>
    );
};

export { Home };
