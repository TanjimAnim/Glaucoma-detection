import React,{useState} from 'react';
import './Navbar.css';
import { Link, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import App from '../App';

function Navbar(props) {
   const [click, setClick] = useState(false);

  return (
    <>
        <nav className='navbar'>
            <div className='navbar-container'>
                <img src={require('../images/eye-logo2.png')} alt='' className='navbar-Logo'></img>
                <div className='menu-icon' onClick = {() => setClick(!click)}>
                    <i className= {click ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/home' className='link-item'>Home</Link>
                    </li>
                    <li className='nav-item' onClick={e =>props.onClick(e)}>
                        {props.selectLogin? "Register":"Login"}
                    </li>
                </ul>
            </div>
        </nav>
        
    </>
  )
}

export default Navbar