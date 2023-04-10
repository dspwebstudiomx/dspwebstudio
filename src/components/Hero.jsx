import React, { Component } from 'react'
// import '../styles/GeneralStyles.scss'

// TODO - Migrar a CSS

export default class Hero extends Component {
    render() {
        return (
            <div id='hero' className='hero'>

                <div className="hero__container">
                    <h1 className='hero__title'>DSPWEBSTUDIO</h1>
                    <div className="hero__description">
                        <p className='hero__paragraph'>"Convierte tu presencia en línea en una experiencia impresionante con nuestro diseño y desarrollo web a medida"</p>
                        <div id='hero__buttons' className='hero__buttons'>
                            <a href="#services" target={'_self'} className='btn btn--blue'>Servicios</a>
                            <a href="#portfolio" target={'_self'} className='btn btn--yellow'>Portafolio</a>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}