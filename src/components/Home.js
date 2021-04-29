import React, { Component, createRef } from 'react';
import Blue from './Blue/Blue';
import Green from './Green/Green';
import './Home.css';
import Red from './Red/Red';

class Home extends Component {

    constructor(props){
        super(props);
        this.ref = createRef();
        this.state={
            text : ''
        }
    }

    componentDidMount(){
        window.addEventListener('scroll',(event)=>{
            // if(document.getElementById('goup').classList.contains('visible')){
            //     document.getElementById('goup').classList.add('invisible');
            //     document.getElementById('goup').classList.remove('visible')
            // }else{
            //     document.getElementById('goup').classList.add('visible');
            //     document.getElementById('goup').classList.remove('invisible')
            // }
            // document.getElementById('goup').style='background-color:red'; 
            console.log(event);
            this.setState({text:'scrolled'})
        })
    }

    handleClick() {
        this.ref.current.scrollIntoView({behavior : 'smooth'});
        // this.ref.current.scrollTo(0,0)
    }
    render = () => {
       
        return (
            <div ref={this.ref} id='home' className="homeWrapper" >
                <Red />
                <Green />
                <Blue />
                <div id='goup' className='circle' onClick={()=>this.handleClick()}>
                    <i className="arrow down"></i>
                    
                </div>
            </div>
        )
    }
}

export default Home;