import React, { Component } from 'react';

export default class Banner1 extends Component {
    render() {
        return (
            <article id='banner1' className='p-16 lg:px-36'>

                {/* Bloque 1 */}
                <div className="grid grid-cols-1 py-6 md:grid-cols-2">

                    <div className="">
                        <h3 className='text-slate-800 text-xl font-bold'>¿Quieres crear sitios web para tu empresa, negocio o campaña?</h3>
                    </div>

                    <div className="hidden md:block"></div>
                </div>
                {/* Bloque 1 */}

                {/* Bloque 2 */}
                <div className="grid grid-cols-1 md:grid-cols-2 pt-6 pb-8">
                    <div className="hidden md:block"></div>
                    <div className="">
                        <h3 className='text-slate-800 text-xl font-bold'>¿Quieres desarrollar un sitio web que sea 100% compatible con todos tus dispositivos?</h3>
                    </div>
                </div>
                {/* Bloque 2 */}

                {/* Bloque 3 */}
                <div className="grid grid-cols-1 md:grid-cols-2 pt-6 pb-9">
                    <div className="">
                        <h3 className='text-slate-80 text-xl font-bold'>¿Quieres optimizar el rendimiento de tu sitio web?</h3>
                    </div>
                    <div className="hidden md:block"></div>
                </div>
                {/* Bloque 3 */}

            </article>
        )
    }
}