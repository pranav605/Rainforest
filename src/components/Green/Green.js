import React, { Component } from 'react';
import './green.css';
import background from './ferns.jpg';
import Card from '../Card/Card';

class Green extends Component {
    data_array = [
        {
            image: 'https://ychef.files.bbci.co.uk/624x351/p03v9b0v.jpg',
            text: 'The Amazon basin is a marvel of the world and the imagination, an ecosystem of unrivaled size and diversity, and a place of near mythical status among travelers. The Amazon River has more water than the next eight largest rivers combined, and is twice the area of India, and the basin spans eight countries. '
        },
        {
            image: 'https://static.flocabulary.com/media/images/56deb6b6f9c293daba012097bf30d9ea/SCI-tropical-rainforest-image.jpg',
            text: 'A billion verdant wands of pine wave in arboreal air; for this place is magical, so much so that you can feel it from core to finger tips.'
        },
        {
            image: 'https://www.edenproject.com/sites/default/files/styles/ep_main_image/public/teaser-carousel/pitcher-plant-close-up.jpg?itok=VV2tTNWE',
            text: 'As an ecosystem, the Amazon is one of the most biodiverse places on earth. Over 3 million species live in the rainforest, and over 2,500 tree species (or one-third of all tropical trees that exist on earth) help to create and sustain this vibrant ecosystem.'
        },
        {
            image: 'https://pixy.org/download/1505092/',
            text: 'The Amazon is one giant rain forest, so it is not surprising that there are dramatic waterfalls throughout the region, particularly during the wet season. The contrast of cascading water, rocky outcrops and tropical greenery make Amazonian waterfalls a visual treat. Seeing tropical birds and animals in their natural surroundings is an added bonus.'
        },
    ]

    render() {
        return (
            <div id='green' className="green" style={{ height: '100%', scrollSnapAlign: 'start', backgroundImage: `url(${background})` }}>
                {/* <div className='' id='card'>
                    <p>This is where I show you the travel plans</p>
                </div> */}
                <div className='row'>
                    {this.data_array.map((data,index) => {
                       return <Card className='col' data={data} key={index} />
                    })}

                </div>
            </div>
        )
    }
}

export default Green;