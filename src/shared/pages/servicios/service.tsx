import React from 'react';
import './service.scss';
import { TopCard } from '../../components/top-card/top-card';
import { Card } from '../../components/card/card';

interface IService {
    title: string;
}

const Service: React.FC<IService> = ({ title }) => {
    return (
        <div className="service__conteiner">
            <div className="hidden_top" id="service"></div>
            <TopCard label="SERVICES" />
            <div className="cards">
                <div className="card1">
                    <Card
                        number={1}
                        title="titulo1"
                        content="Curabitur cursus mattis ligula 
                a maximus pellentesque in purus malesuada pharetra eros."
                    />
                </div>
                <div className="card2">
                    <Card
                        number={2}
                        title="titulo1"
                        content="Curabitur cursus mattis ligula 
                a maximus pellentesque in purus malesuada pharetra eros."
                    />
                </div>
                <div className="card3">
                    <Card
                        number={3}
                        title="titulo1"
                        content="Curabitur cursus mattis ligula 
                a maximus pellentesque in purus malesuada pharetra eros."
                    />
                </div>
            </div>
        </div>
    );
};

export { Service };
