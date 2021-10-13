import React, { Component } from 'react';
import { MenuItems } from './MenuItems';
import './Navbar.css';

class Navbar extends Component { 
  state = { click: false};

  handleClick = () => {
    this.setState({ click: !this.state.click })
  }



  render() {
    return(
      <nav className='NavbarItems'>
        <h1 className='navbar-logo'>Shrinp City</h1>
        <div className='menu-icon'>

        </div>
        <ul className={this.state.click ? 'nav-menu active' : 'nav-menu'}>
          {MenuItems.map((item, index)=>{
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                {item.title}
                </a>
              </li>
            );
          })}

        </ul>
      </nav>
    );
  }
}

export default Navbar;