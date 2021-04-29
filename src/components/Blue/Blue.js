import React, { Component } from 'react';
import Blockquote from '../Blockquote/Blockquote';
import './Blue.css';
import background from './plants.jpg';
export default class Blue extends Component {


    render() {
        const data = [
            {
                image: "https://images.unsplash.com/photo-1542206395-9feb3edaa68d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
                text: "I am a Photographer, especially I love wild life photography. With Rainforest I was able to capture the beauty of the Amazon"
            },
            {
                image: 'https://images.pexels.com/photos/412840/pexels-photo-412840.jpeg?crop=faces&fit=crop&h=200&w=200&auto=compress&cs=tinysrgb',
                text: "I am a wanderer. RainForest has helped me to explore deep forests and quench my thirst for some adventure."
            }
        ]
        return (

            <div id='blue' className="blue" style={{ height: '100%', backgroundColor: 'blue', backgroundImage: `url(${background})`, scrollSnapAlign: 'start' }}>
                <div className='cards-wrapper'>
                    {data.map((data, index) => {
                        return (
                            <div className='bq' index={index}>
                                <Blockquote data={data} />
                            </div>
                        )
                    })}
                </div>

                <div className='end-section'>
                    <h2>Want to join us? Give us your contact details. We will get in touch with you.</h2>
                    <div className='form-container'>
                        <form className='form'>
                            <label for='email'>Email</label>
                            <input type='email' placeholder='email' id='email' name='email'></input>
                            <label for='tel' style={{paddingLeft:'10px'}}>Mobile</label>
                            <input type='tel' id='tel' name='tel'></input>
                            <input type='submit'></input>
                        </form>
                    </div>
                </div>


            </div>
        )
    }
}
