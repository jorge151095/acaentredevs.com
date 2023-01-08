import React from 'react';
import './equipo.scss';
import { TopCard } from '../../components/top-card/top-card';
import { SocialMediaCard } from '../../components/social-media-card/social-media-card';

interface ITeamMember {
    title: string;
    content: string;
    role: string;
    linkedin: string;
}

const teamData: ITeamMember[] = [
    {
        title: 'Jorge Hernández',
        content:
            'Jorge es un desarrollador web con más de 6 años de experiencia. Jorge se especializa en Javascript, React, NodeJS  y otros frameworks de JS. Jorge tiene un título en ingeniería en computación y ha trabajado con una variedad de equipos para empresas internacionales como Dell, Indeed, BBVA, Santander, Paypal, así como para medianas y pequeñas empresas.',
        role: 'Co-founder / Software engineer',
        linkedin: 'https://www.facebook.com/jorgeantonio.hernandez.77920'
    },
    {
        title: 'Eduardo Urbina',
        content:
            'Eduardo es un desarrollador web especializado en front end. Sus tecnologías de desarrollo principales son ReactJS y Typescript. Ha colaborado en aplicaciones que impactan más de 1,000,000 de usuarios al mes.',
        role: 'Co-founder / Software engineer',
        linkedin: 'https://www.linkedin.com/in/eduardohdezurbina93/'
    },
];

const Team: React.FC = () => {
    return (
        <div className="team__contenedor" id="team">
            <TopCard label="EQUIPO" />
            {teamData.map((member, index) => {
                const isRight = index % 2;
                return (
                    <div key={member.title} className="member-container">
                        <div className={isRight ? 'team_caja1' : 'caja2'}>
                            <div className={isRight ? 'team__texto' : 'texto2'}>
                                <h3>{member.role}</h3>
                                <h1 className="team__title">{member.title}</h1>
                                <p>{member.content}</p>
                                <SocialMediaCard
                                linkedinUrl={member.linkedin}
                            />
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export { Team };
