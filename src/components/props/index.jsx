import React from 'react'
import { useState } from 'react'
import { accordion } from '../../data/accordion';
import "./style.scss"

function Accordion() {
    const [active,setActive] = useState(false);
  return (
    <div className='accordion'>
        <div className='accordion-item'>
            <div className='accordion-title' onClick={() => setActive(!active)}>
                <div className='title-sign'>{accordion.title}</div>
                <div>{active ? "-" : "+"}</div>
            </div>
            {active ? <div className='accardion-content'>{accordion.content}</div>:""}
        </div>
    </div>
  )
}

export default Accordion