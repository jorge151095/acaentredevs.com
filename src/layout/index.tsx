import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './header';
import { NavBar } from './../../src/shared/components/advar/navbar';

const MainLayout = () => {
    return (
        <div className="main-layout">
            <NavBar />
            <Header />

            <Outlet />
        </div>
    );
};

export default MainLayout;
