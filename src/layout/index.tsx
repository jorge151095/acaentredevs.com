import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './header';
import './layout.scss';

const MainLayout = () => {
    return (
        <div className="main-layout">
            <Header />
            <Outlet />
        </div>
    );
};

export default MainLayout;
