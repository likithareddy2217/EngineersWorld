import React from 'react';
import "./Card.css";

export default function Card({ cardcontent }) {
    return(
        <div className='card'>
            <p>{cardcontent}</p>
        </div>
    )
}