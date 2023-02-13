import React,{useState} from 'react';
import { Navbar } from 'react-bootstrap';
import './GenNavbar.css';
import { useNavigate } from 'react-router-dom'

function Menu() {
   const [click, setClick] = useState(false);
   const navigate = useNavigate();
  return (
    <>
        <nav className='navbar py-0'>
            <div className='navbar-container' >
                <img src='/images/sust-logo.png' alt='' className='navbar-Logo mx-2'></img>
                <div className='nav-brand'>
                <Navbar.Brand style={{color:'#535c68'}}>Glaucoma detection</Navbar.Brand> </div>
                
                <div className='menu-icon' onClick = {() => setClick(!click)}>
                    <i className= {click ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item mt-2'
                    onClick={()=>{navigate("/SignUp");}}>
                        Sign Up
                    </li> 
                    <li className='nav-item mt-2'
                    onClick={()=>{navigate("/");}}>
                        Login
                    </li>
                 </ul> 
            </div> 
        </nav>
    </>
  )
}


export default Menu; 