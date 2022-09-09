import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { Icon } from '@iconify/react';
import ResLogo from '../../assets/Images/ResLogo.jpg';
import '../NavBar/Navbar.scss';

function Navbar() {
  const [active, setActive] = useState(false);

  //Navbar icon function
  const DisplayMenu = () => {
    setActive(!active);
  };
  return (
    <div className='header'>
      <div className='navlogo'>
        <Link to='/' className='logo'>
          <img className='logo-image' src={ResLogo} alt='Logo' />
        </Link>
      </div>
      <nav className={active ? 'navbar' : 'closed'}>
        <ul className='Nav-links'>
          <div className='closed'>
            <Icon
              className='close'
              icon='bi:x-lg'
              width='100'
              height='100'
              onClick={DisplayMenu}
            />
          </div>
          <li className='Nav-links'>Dishes</li>

          <li className='Nav-links'>Basket</li>
        </ul>
      </nav>
      <nav className='login-navTag'>
        <ul className='nav-login'>
          <li className='nav-login'>Login</li>

          <li className='nav-login'>Join</li>
        </ul>
      </nav>

      <div className='menubar'>
        <Icon
          icon='charm:menu-hamburger'
          className='menu'
          onClick={DisplayMenu}
          width='50'
          height='50'
        />
      </div>
    </div>
  );
}
export default Navbar;
