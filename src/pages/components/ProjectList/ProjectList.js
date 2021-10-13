import React, { Component } from 'react';
import { ProjectItems } from './ProjectItems';
import './ProjectList.css';


class ProjectList extends Component {

    render(){
        return(
            <div className='theme-wrapper'>
                <div>
                    <div>
                        <h1>Projects</h1>
                    </div>
                </div>
                <div className='project-list-wrapper'>
                    <ul className='project-list'>
                        {ProjectItems.map((item, index) =>{
                            return(
                                <li key={index}>
                                    <div className='project-links-wrapper'>
                                        <a className={item.cName} href={item.url}>
                                            <div className='project-image-wrapper'>
                                                <img className='project-image' src={item.imgSrc}></img>
                                                <div className='project-text-wrapper'>
                                                    <h2 className= 'project-title'>{item.title}</h2>
                                                    <h1 className= 'project-subtitle'>{item.subtitle}</h1>
                                                    <p className='project-description'>{item.description}</p>
                                                </div>
                                            </div>
                                        </a>
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

export default ProjectList;
