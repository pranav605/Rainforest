import React from 'react';
import './Blockquote.css';

export default function Blockquote(props) {
    return (
        <div className="block row">
            <div className='quote column'><p>"{props.data.text}"</p></div>
            {/* <div classname='vl column'></div> */}
            <img className='profile-pic column' src={props.data.image} alt='profile'></img>
        </div>
    )
}
