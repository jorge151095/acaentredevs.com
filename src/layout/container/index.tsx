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
            <Service />
            <About
                subtitle="¿QUIENES SOMOS?"
                title="Profesionales en desorrollo web"
                content="Empresa especializada en creación de contenido para profesionistas relacionados al área de tecnologías de la información"
            />
            <Team />

            <Contact
                subtitulo="CONTÁCTANOS"
                title="TRABAJEMOS JUNTOS"
                content="Tienes algún proyecto y te gustaría consultoría, solo contáctanos, te dejamos nuestras redes sociales activas"
            />
        </>
    );
};

export default Container;
