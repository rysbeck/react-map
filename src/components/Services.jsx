/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
import React from 'react'
import {servicesData} from "../data/servicesData"
import arr from "../assets/img/arrow.svg"
import "./style.scss"


function Services() {
  return (
    <div>
        <div className='services'>
            <div className='container'>
                <h2 className='services__title'>Что мы предлагаем</h2>
                <div className='services__row'>
                    {
                    servicesData.map((item)=>(
                        <div key={(item.id)} className='services__card'>
                        <img src={item.icon} alt={item.text} />
                        <h3>{item.text}</h3>
                        </div>
                    ))
                    }
                    <div className='services__card'></div>
                    <div className='services__card'></div>
                    <div className='services__card'>
                        <button type='button' >Подробнее<img src={arr} alt="arrow" /></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services