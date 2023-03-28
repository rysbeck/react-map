/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import "./style.scss"

import {
    benefits
}

from './../../data/benefits';

function index() {
    return ( 
    <div className = 'benefits' > 
    <div className = "container" >
        < h2 > Наши преимущества </h2> 
        <div className="benefits__card"> 
        {benefits.map((item) => ( 
            < div className = "benefits__card-item" > 
                < img src = {item.img} alt = {item.id}/> 
                <p> {item.text}</p> 
            </div > 
            ))}
        </div> 
    </div > 
    </div>)
}

export default index