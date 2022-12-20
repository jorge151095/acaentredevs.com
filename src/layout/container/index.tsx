import React from 'react';
import { ButtonLink } from '../../shared/components/button-link/button-link';
import { TopCard } from '../../shared/components/top-card/top-card';
import { SocialMediaCard } from '../../shared/components/social-media-card/social-media-card';
import { Card } from '../../shared/components/card/card';
import { BlogCard } from '../../shared/components/blog-card/blog-card';
import { PresentationCard } from '../../shared/components/presentation-card/presentation-card';

const Container = () => {
    return (
        <div>
            <ButtonLink label="LEARN MORE" href="" />

            <TopCard label="SERVICES" />

            <SocialMediaCard href="" />

            <Card
                number={1}
                title="titulo1"
                content="Curabitur cursus mattis ligula 
            a maximus pellentesque in purus malesuada pharetra eros."
            />

            <BlogCard
                title="How to write rogue mote of dust love"
                content="Bearable only through love hydrogen atoms bits of moving 
            fluff culture shores of the cosmic ocean paroxysm of global death …"
                href=""
                date="10 de marzo de 19894"
            />

            <PresentationCard
                role="CEO"
                subtitle="Marty Stone"
                content=" Code the energy hidden in matter citizens of 
            distant epochs sun. Citizens of distant epochs encyclopaedia 
            galant ctica the ash of stellar alchemy Vangelis white 
            dwarf adipisci velit. Nemo enim ipsam volupta tem quia voluptas 
            sit aspernatur aut odit aut fugit radio telescope quis nostrum 
            exercitatio nem ullam corporis suscipit laboriosam quis."
            />
        </div>
    );
};

export default Container;
