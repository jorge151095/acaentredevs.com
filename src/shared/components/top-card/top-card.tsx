import React from 'react';
import './top-card.scss';

interface ITop {
    label: string;
}

const TopCard: React.FC<ITop> = ({ label }) => {
    return (
        <section className="section">
            <div className="page-title-holder">
                <h3 className="entry-title">{label}</h3>
            </div>
        </section>
    );
};

export { TopCard };
