import React, { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { VscMenu } from 'react-icons/vsc';
import './navbar.scss';
import { Link } from 'react-scroll';
import img1 from '../../../assets/icons/logo.png';

export const NavBar = () => {
    const [isRightNavOpen, setRightNavOpenValue] = useState(false);
    const handleRightNav = () => setRightNavOpenValue(!isRightNavOpen);
    const closeMobileMenu = () => setRightNavOpenValue(false);

    return (
        <nav
            className={
                isRightNavOpen ? 'navbar-container active' : 'navbar-container'
            }
        >
            <div className="floatnav"></div>
            <div
                className={isRightNavOpen ? 'background active' : 'background'}
                onClick={closeMobileMenu}
            ></div>
            <div className="header-logo">
                <img src={img1} alt="" />
            </div>
            <div className={isRightNavOpen ? 'list active' : 'list'}>
                <div className="link menu" onClick={handleRightNav}>
                    {isRightNavOpen ? (
                        <IoMdClose className="icon" />
                    ) : (
                        <VscMenu className="icon" />
                    )}
                </div>
                <Link
                    className="link"
                    activeClass="active"
                    to="home"
                    smooth={true}
                    offset={-60}
                    duration={800}
                    onClick={closeMobileMenu}
                >
                    Home
                </Link>
                <Link
                    className="link"
                    activeClass="active"
                    to="service"
                    smooth={true}
                    offset={-60}
                    duration={800}
                    onClick={closeMobileMenu}
                >
                    Servicios
                </Link>
                <Link
                    className="link"
                    activeClass="active"
                    to="about"
                    smooth={true}
                    offset={-60}
                    duration={800}
                    onClick={closeMobileMenu}
                >
                    Acerca de
                </Link>
                <Link
                    className="link"
                    activeClass="active"
                    to="team"
                    smooth={true}
                    offset={-60}
                    duration={800}
                    onClick={closeMobileMenu}
                >
                    Equipo
                </Link>
                <Link
                    className="link"
                    activeClass="active"
                    to="contact"
                    smooth={true}
                    offset={-60}
                    duration={800}
                    onClick={closeMobileMenu}
                >
                    Contacto
                </Link>
            </div>
        </nav>
    );
};
