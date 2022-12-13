import React from 'react';
import './button-link.scss';

interface IButton {
    label: string;
    href: string;
}

const ButtonLink: React.FC<IButton> = ({ label, href }) => {
    return (
        <a href={href} className="button">
            {label}
        </a>
    );
};

export { ButtonLink };
