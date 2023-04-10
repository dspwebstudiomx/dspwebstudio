import React, { Component } from 'react'

export default class ReturnButton extends Component {
    render() {
        return (
            <div className='returnButton animate__animated animate__fadeInRight'>
                <a href='#hero' className='returnButton__link'>
                    Inicio
                </a>
            </div>
        )
    }
}
