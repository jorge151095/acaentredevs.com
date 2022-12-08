import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainLayout from './layout';
import Container from './layout/container';

const RouteSetup = () => (
    <Routes>
        <Route path="/" element={<MainLayout />}>
            <Container />
        </Route>
    </Routes>
);

export default RouteSetup;
