import React from 'react';
import './service.scss';
import { TopCard } from '../../components/top-card/top-card';
import { Card } from '../../components/card/card';


const Service: React.FC = () => {
    return (
        <div className="service__conteiner" id="service">
            <div className="hidden_top"></div>
            <TopCard label="¿QUÉ HACEMOS?" />
            <div className="cards">
                <div className="card1">
                    <Card
                        number={1}
                        title="Creación de contenido"
                        content="Creamos contenido educativo para programadores nuevos y avanzados"
                    />
                </div>
                <div className="card2">
                    <Card
                        number={2}
                        title="Desarrollo de aplicaciones web"
                    />
                </div>
                <div className="card3">
                    <Card
                        number={3}
                        title="Consultoria"
                        content="Orientación y mentoría relacionadas a desarrollo web"
                    />
                </div>
            </div>
        </div>
    );
};

export { Service };
