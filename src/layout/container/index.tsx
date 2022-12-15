import React from 'react';
import { ButtonLink } from '../../shared/components/button-link/button-link';
import { TopCard } from '../../shared/components/top-card/top-card';
import { SocialMediaCard } from '../../shared/components/social-media-card/social-media-card';
import { Card } from '../../shared/components/card/card';
const Container = () => {
    return (
        <div>
            <ButtonLink label="LEARN MORE" href="" />

            <TopCard label="SERVICES" />

            <SocialMediaCard href="" />

            <Card label="" />
        </div>
    );
};

export default Container;
