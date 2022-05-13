import React from 'react';
import ironhackLogo from '../images/ironhack-logo-xs.png';
import menuTop from '../images/menu-top-xs.png';
 
class Header extends React.Component {
  render() {
    return (
      <header className = "Header">
        <img src = {ironhackLogo} alt = "ironhack logo"/>
        <img src = {menuTop} alt = "menu top icon"/>
      </header>
    );
  }
}
 
export default Header;