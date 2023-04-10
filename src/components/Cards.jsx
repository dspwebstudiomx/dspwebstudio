import '../styles/GeneralStyles.scss'
import React, { Component } from 'react'

export default class Cards extends Component {
    render() {
        return (
            <section id='services' className='section container'>

                <h2 className='container__h2'>Mis servicios</h2>
                <hr className='container__h2-line' />
                <div className='card__container'>

                    {/* Diseño Web */}
                    <article className='card'>
                        <div className="card__description">
                            <h3 className='card__title'>Diseño Web <span className='point'>.</span></h3>
                            <p className='card__paragraph'>El servicio de diseño web es una forma genial de crear una presencia en línea para ti o tu negocio. Básicamente, el diseño web implica la creación de una página web atractiva y fácil de usar que se adapte a las necesidades de tus usuarios. Un buen diseño web debe ser funcional, fácil de navegar y visualmente atractivo para los visitantes de tu sitio web.</p>
                            <p className='card__paragraph'>Los diseñadores web trabajan en colaboración contigo para entender tus necesidades y crear un sitio web que represente fielmente tu marca o personalidad. Pueden ayudarte a elegir el diseño, los colores, las fuentes y las imágenes adecuadas para hacer que tu sitio web se vea genial y sea fácil de usar.</p>
                        </div>
                        <div className="card__image">
                            <figure>
                                <img className='card__image-img' src="src/assets/diseñoweb.jpg" alt="" srcset="" />
                            </figure>
                        </div>
                    </article>

                    {/* Desarrollo Web */}
                    <article className='card'>
                        <div className="card__description">
                            <h3 className='card__title'>Desarrollo Web <span className='point'>.</span></h3>
                            <p className='card__paragraph'>El servicio de desarrollo web es una forma emocionante de crear una página web dinámica y funcional que se adapte a tus necesidades y objetivos en línea. Básicamente, el desarrollo web implica la construcción y programación de un sitio web desde cero, utilizando lenguajes de programación como HTML, CSS, JavaScript, y otros.</p>
                            <p className='card__paragraph'>Los desarrolladores web trabajan en colaboración contigo para entender tus necesidades y crear un sitio web personalizado que satisfaga tus objetivos en línea. Pueden ayudarte a desarrollar características como formularios de contacto, páginas de registro, carritos de compras, y otras funciones que sean relevantes para tu negocio o marca.</p>
                        </div>
                        <div className="card__image">
                            <figure>
                                <img className='card__image-img' src="src/assets/placeholder.png" alt="" srcset="" />
                            </figure>
                        </div>
                    </article>

                    {/* Posicionamiento en la Web */}
                    <article className='card'>
                        <div className="card__description">
                            <h3 className='card__title'>Posicionamiento en la Web <span className='point'>.</span></h3>
                            <p className='card__paragraph'>El posicionamiento web, también conocido como SEO (Search Engine Optimization), es muy importante para cualquier sitio web que quiera ser visible en línea y atraer tráfico. Básicamente, el SEO se trata de optimizar tu sitio web para que los motores de búsqueda como Google, Bing, y otros puedan entender tu contenido y lo muestren a las personas que buscan información relacionada.</p>
                            <p className='card__paragraph'>El SEO es importante porque ayuda a aumentar la visibilidad de tu sitio web en línea, lo que significa que más personas pueden encontrarlo cuando buscan información relacionada con tus productos o servicios. Esto puede aumentar el tráfico a tu sitio web y, por lo tanto, aumentar las oportunidades de ventas o conversión.</p>
                        </div>
                        <div className="card__image">
                            <figure>
                                <img className='card__image-img' src="src/assets/placeholder.png" alt="" srcset="" />
                            </figure>
                        </div>
                    </article>

                    {/* Mantenimiento de sitios */}
                    <article className='card'>
                        <div className="card__description">
                            <h3 className='card__title'>Mantenimiento de sitios <span className='point'>.</span></h3>
                            <p className='card__paragraph'>El mantenimiento en los sitios web es fundamental para garantizar su correcto funcionamiento y seguridad a largo plazo. Los sitios web son una herramienta fundamental para la comunicación, el marketing, las ventas y muchos otros aspectos del mundo empresarial y personal. Por lo tanto, es esencial asegurarse de que el sitio web esté actualizado y en óptimas condiciones para cumplir con sus objetivos y satisfacer las necesidades de los usuarios.</p>
                            <p className='card__paragraph'>Los sitios web que no se mantienen pueden tener problemas de seguridad, como la posibilidad de ataques cibernéticos o la exposición de información confidencial. Además, los sitios web desactualizados pueden tener problemas de rendimiento, lo que puede llevar a una experiencia de usuario deficiente. El mantenimiento regular del sitio web, incluyendo actualizaciones de seguridad y software, contenido fresco y pruebas de usabilidad, ayuda a mantener la seguridad, el rendimiento y la experiencia del usuario a un nivel óptimo, lo que a su vez aumenta la satisfacción del usuario y la eficacia del sitio web.</p>
                        </div>
                        <div className="card__image">
                            <figure>
                                <img className='card__image-img' src="src/assets/placeholder.png" alt="" srcset="" />
                            </figure>
                        </div>
                    </article>
                </div>

            </section >
        )
    }
}