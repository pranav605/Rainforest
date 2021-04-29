import React from 'react';
import './card.css';

export default function Card(data) {
    console.log(data);
    return (
        <div className='card'>
           <img className='card-image' src={data.data.image} alt=''></img>
            <div className='card-body'>{data.data.text}</div>
        </div>
    )
}
