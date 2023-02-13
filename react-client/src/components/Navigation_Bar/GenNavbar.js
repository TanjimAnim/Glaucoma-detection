import React,{useState} from 'react';
import { Navbar } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'
import './GenNavbar.css';

function GenNavbar() {
   const [click, setClick] = useState(false);
   const navigate = useNavigate();

  return (
    <>
        <nav className='navbar py-0'>
            <div className='navbar-container' >
                <img src='/images/sust-logo.png' alt='' className='navbar-Logo mx-2'></img>
                <div className='nav-brand'>
                <Navbar.Brand style={{color:'#535c68'}}>Glaucoma Detection</Navbar.Brand> </div>
                <div className='menu-icon' onClick = {() => setClick(!click)}>
                    <i className= {click ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item mt-2'
                    onClick={()=>{navigate("/");}}>
                        Home
                    </li>
                    <li className='nav-item mt-2'
                    onClick={()=>{navigate("/");}}>
                        Profile
                    </li>
                    <li className='nav-item mt-2'
                    onClick={()=>{navigate("/");}}>
                        Logout
                    </li>
                </ul>
            </div>
        </nav>
    </>
  )
}

export default GenNavbar