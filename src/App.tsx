import React from 'react';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import MainLayout from './layout';
import Container from './layout/container';
import "@fontsource/rubik";

function App() {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route path="/" element={<Container />} />
            </Route>
        </Routes>
    );
}

export default App;
