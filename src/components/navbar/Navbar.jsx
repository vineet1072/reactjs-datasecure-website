import React, {useState} from 'react'
import '../navbar/Navbar.css'
import {Link} from 'react-router-dom'
import { SiDatabricks } from 'react-icons/si'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineCloseCircle } from 'react-icons/ai'



function Navbar() {
    const [nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav)


    return (
        <div name='top' className='navbar'>
            <div className="container">
                <div className="logo">
                    <SiDatabricks className='icon' />
                    <h1>Secured</h1>
                </div>

                <ul className={nav ? 'nav-menu active' : 'nav-menu'}>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/recovery'>Recovery</Link> </li>
                    <li><Link to='/cloud'>Cloud</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>

                    <button>Sign in</button>
                </ul>
                <div className="hamburger" onClick={handleNav}>
                    {!nav ? (<GiHamburgerMenu className='icon' />) : (<AiOutlineCloseCircle className='icon' />)}
                </div>
            </div>
        </div>
    )
}




export default Navbar