import React from 'react';
import { Home } from '../../shared/pages/home/home';
import { Service } from '../../shared/pages/servicios/service';
import { About } from '../../shared/pages/about/about';
import { Team } from '../../shared/pages/equipo/equipo';
import { Contact } from '../../shared/pages/contacto/contacto';
const Container = () => {
    return (
        <>
            <Home title="Acá entre devs" />
            <Service title="WHO WE ARE" />
            <About
                subtitle="WHO WE ARE"
                title="Live up to
            your creative potential."
                content="Code the energy hidden in matter citizens
            of distant epochs from which we spring drake equation
            perga inconspicuous motespatch clean designed code 
            and energy matter."
            />
            <Team />

            <Contact
                subtitulo="CONTACT US"
                title="Lets startWorking"
                content="Because they are hard, because that goal will serve to organize and measure the best of our energies and skills, 
            because that challenge is one that we are willing to accept one we are."
            />
        </>

        //         // <div>
        //         //     <ButtonLink label="LEARN MORE" href="" />

        //         //     <TopCard label="SERVICES" />

        //         //     <SocialMediaCard
        //         //         instagramUrl="https://www.instagram.com/acaentredevs/"
        //         //         facebookUrl="https://www.facebook.com/acaentredevs"
        //         //         twitterUrl="https://twitter.com/acaentredevs"
        //         //         youtubeUrl="https://www.youtube.com/@acaentredevs"
        //         //         hasBackgroud
        //         //     />

        //         //     <Card
        //         //         number={1}
        //         //         title="titulo1"
        //         //         content="Curabitur cursus mattis ligula
        //         //     a maximus pellentesque in purus malesuada pharetra eros."
        //         //     />

        //         //     <BlogCard
        //         //         title="How to write rogue mote of dust love"
        //         //         content="Bearable only through love hydrogen atoms bits of moving
        //         //     fluff culture shores of the cosmic ocean paroxysm of global death …"
        //         //         href=""
        //         //         date="10 de marzo de 19894"
        //         //     />

        //         //     <PresentationCard
        //         //         role="CEO"
        //         //         subtitle="Marty Stone"
        //         //         content=" Code the energy hidden in matter citizens of
        //         //     distant epochs sun. Citizens of distant epochs encyclopaedia
        //         //     galant ctica the ash of stellar alchemy Vangelis white
        //         //     dwarf adipisci velit. Nemo enim ipsam volupta tem quia voluptas
        //         //     sit aspernatur aut odit aut fugit radio telescope quis nostrum
        //         //     exercitatio nem ullam corporis suscipit laboriosam quis."
        //         //     />
        //         // </div>
    );
};

export default Container;
