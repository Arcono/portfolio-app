import React, { Component } from 'react';
import { BadgeList } from './BadgeList';
import './SkillBadges.css'
//import html5Badge from './res/html5.svg';
//import html5Badge from './res/Badges';


class SkillBadges extends Component {
    render(){
        return(
            <div className='theme-wrapper'>
                <div>
                    <div>
                        <h1>Skills and Tools</h1>
                    </div>
                </div>
                <div className='badge-list-wrapper'>
                    <ul className='badge-list'>
                        {BadgeList.map((item,index) =>{
                            return(
                                <li className='badge-li' key={index}>
                                    <div className='badge-wrapper'>
                                        <div className ='svg-wrapper' >
                                            {item.svg}
                                        </div>
                                        <div>
                                            <h3>{item.title}</h3>
                                        </div>
                                    </div>
                                </li>
                            );
                        })}

                    </ul>
                </div>
            </div>
        );
    }
}

export default SkillBadges