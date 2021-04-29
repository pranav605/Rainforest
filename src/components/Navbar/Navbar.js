import React, { Component } from 'react'
import './navbar.css';
export default class Navbar extends Component {

    constructor() {
        super()
        this.state = {
            class: 'navbar'
        }
    }

    

    render() {
        return (

            <div id="myP"  className={this.state.class} >
                <div className=''>
                    <a href='#red' className='navbar-logo' >Rain Forest</a>
                </div>
                <div className="list">
                    <a href='#red' className='listItem'>Home</a>
                
                    <a href='#green' className='listItem' >Description</a>
               
                    <a href='#blue' className='listItem' >Contact</a>
                </div>
            </div>

        )
    }
}
