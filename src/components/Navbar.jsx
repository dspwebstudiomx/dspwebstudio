import React from 'react'
import '../styles/GeneralStyles.scss'
import Clock from './Clock'


const Navbar = () => {
    return (
        <div className='navbar'>
            {/* Logo */}
            <div className="navbar__logo">
                <a href="http://localhost:5173/">
                    <figure>
                        <img className='navbar__img' src="./public/logo.png" alt="logo" srcset="" />
                    </figure>
                </a>
            </div>
            {/* Logo */}

            {/* Links */}
            <div className='navbar__nav'>
                <ul className='navbar__list'>
                    <a href="#" className='navbar__link'>
                        <li>Inicio</li>
                    </a>
                    <a href="#services" className='navbar__link'>
                        <li>Servicios</li>
                    </a>
                    <li className='navbar__link'>Portafolio</li>
                    <li className='navbar__link'>Contacto</li>
                </ul>
            </div>
            {/* Links */}

            {/* Reloj */}
            <Clock />
            {/* Reloj */}
        </div>
    )
}
export default Navbar