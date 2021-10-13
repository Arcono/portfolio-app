import React, {Component} from 'react';
import './Introduction.css';


class Introduction extends Component{
    render(){
        return(
            <div className='theme-wrapper'>
                <div className='introduction-wrapper'>
                    <div className='intro-image-wrapper'>
                        <img className='intro-image' src='https://media.discordapp.net/stickers/890687499071021109.png?size=160'></img>
                    </div>
                    <div className='intro-text-wrapper'>
                        <h1 className='intro-title'>Hello</h1>
                        <h2 className='intro-text'>
                            I am a full stack developer
                        </h2>
                    </div>

                </div>
            </div>
        );
    }
}

export default Introduction;