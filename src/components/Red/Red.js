import React, { Component } from 'react';
import './Red.css';
import background from './long-fern.jpg'

export default class Red extends Component {
    
    render() {
        
        return (
            <section id='red' style={{height:'100%',backgroundColor:'red',backgroundImage: `url(${background})`,scrollSnapAlign:'start'}}>
                <div className='content'>
                    <h1>RainForest</h1>
                    <p>Explore the wild</p>
                </div>
            </section>
        )
    }
}
