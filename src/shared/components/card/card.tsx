import React from 'react';
import './card.scss';

interface ICard {
    content?: string;
    number: number;
    title: string;
}

const Card: React.FC<ICard> = ({ title, content, number }) => {
    return (
        <div className="service-holder">
            <p className="service-num">{number}</p>
            <div className="service-txt">
                <h4>{title}</h4>
                {content && <p>{content}</p>}
            </div>
        </div>
    );
};

export { Card };
