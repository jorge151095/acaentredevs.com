import React from 'react';
import './equipo.scss';
import { TopCard } from '../../components/top-card/top-card';
import equipo_img from '../../../assets/imagblog/img.png';
import { SocialMediaCard } from '../../components/social-media-card/social-media-card';

interface ITeamMember {
    title: string;
    content: string;
    role: string;
}

const teamData: ITeamMember[] = [
    {
        title: 'Marty Stone',
        content:
            'Code the energy hidden in matter citizens of distant epochs sun. Citizens of distant epochs encyclopaedia galantctica the ash of stellar alchemy Vangelis white dwarf adipisci velit. Nemo enim ipsam volupta tem quia voluptas sit aspernatur aut odit aut fugit radio telescope quis nostrum exercitatio nem ullam corporis suscipit laboriosam quis.',
        role: 'CEO',
    },
    {
        title: 'ricardo',
        content:
            'Code the energy hidden in matter citizens of distant epochs sun. Citizens of distant epochs encyclopaedia galantctica the ash of stellar alchemy Vangelis white dwarf adipisci velit. Nemo enim ipsam volupta tem quia voluptas sit aspernatur aut odit aut fugit radio telescope quis nostrum exercitatio nem ullam corporis suscipit laboriosam quis.',
        role: 'CEO',
    },
];

const Team: React.FC = () => {
    return (
        <div className="team__contenedor">
            <TopCard label="TEAM" />
            {teamData.map((member, index) => {
                const isRight = index % 2;
                return (
                    <div key={member.title} className="member-container">
                        <div className={isRight ? 'equipo__img1' : 'imag2'}>
                            <img src={equipo_img} alt="imagen de equipo" />
                        </div>
                        <div className={isRight ? 'team_caja1' : 'caja2'}>
                            <div className={isRight ? 'team__texto' : 'texto2'}>
                                <h3>{member.role}</h3>
                                <h1 className="team__title">{member.title}</h1>
                                <p>{member.content}</p>
                            </div>
                        </div>
                        <div
                            className={
                                isRight ? 'team__socialcard' : 'socialcard2'
                            }
                        >
                            <SocialMediaCard
                                instagramUrl="https://www.instagram.com/acaentredevs/"
                                facebookUrl="https://www.facebook.com/acaentredevs"
                                twitterUrl="https://twitter.com/acaentredevs"
                                youtubeUrl="https://www.youtube.com/@acaentredevs"
                                hasBackgroud
                            />
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export { Team };
