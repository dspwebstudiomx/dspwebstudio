import React, { Component } from "react";
import '../styles/GeneralStyles.scss'

export default class Description extends Component {
    render() {
        return (
            <section id="description" className="container">
                <article className="description">
                    <h2 id='description__title' className='description__title'></h2>

                    <div id="description__content" className='description__content'>
                        <p className=''>Si estás buscando crear una presencia en línea para ti o para tu negocio, has venido al lugar correcto. Soy un diseñador y desarrollador web, y estoy aquí para ayudarte a crear un sitio web atractivo y funcional que se adapte a tus necesidades y objetivos en línea.</p>
                        <p className=''>Ya sea que necesites un sitio web para promocionar tus productos o servicios, compartir información con tu audiencia, o simplemente crear una presencia en línea, puedo ayudarte a lograr tus objetivos en línea. Trabajo en colaboración contigo para entender tus necesidades y crear un sitio web personalizado que represente fielmente tu marca o personalidad.</p>
                        <p className=''>Ya sea que necesites un diseño web atractivo o una programación web personalizada, estoy aquí para ayudarte. Puedo ayudarte a optimizar tu sitio web para motores de búsqueda, integrar herramientas de comercio electrónico, y mucho más. ¡No dudes en ponerte en contacto conmigo para hablar sobre tus necesidades y cómo puedo ayudarte a crear la presencia en línea que necesitas!</p>

                    </div>
                </article>
            </section>
        )

    }
}