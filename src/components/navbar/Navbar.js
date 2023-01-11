import React, {useState} from 'react'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import './Navbar.css'
import Logo from '../../assets/dragverselogo.png'

const Navbar = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    return (
        <div className='navbar'>
            <div className="container">
            <Link to='/' ><img src={Logo} alt="DRAGVERSE"/></Link>
                <ul className={click ? 'nav active' : 'nav'}>
                    
                    <li className="nav-item">
                        <a href="/watcher">Watcher View</a>
                    </li>
                    <li className="nav-item">
                        <a href="/feed">Lens Feed</a>
                    </li>
                    <li className="nav-item">
                        <a href="/create-avatar">Create Drag Skin</a>
                    </li>
                    <li className="nav-item">
                        <a href="https://www.figma.com/proto/yvGJs02e7EpemqoXtPpJNA/Dragverse-V3?node-id=108%3A958&scaling=scale-down&page-id=108%3A570&starting-point-node-id=108%3A958/">About Us</a>
                    </li>
                    <li className="nav-item">
                        <a href="https://github.com/justsoantsy/next-video-build">Git</a>
                    </li>
                    <li className="nav-item">
                        <a href="https://social.reinasalti.xyz/next-video-build/">Prototypes</a>
                    </li>
                    <li className="nav-item">
                        <a className='btn' href="https://social.reinasalti.xyz/dragverse/">VISIT DRAGVERSE</a>
                    </li>

                </ul>
                <div onClick={handleClick} className="hamburger">
                    {click ? (<AiOutlineClose className='icon' />) : (<AiOutlineMenu className='icon' />)}
                    
                </div>
            </div>
        </div>
    )
}

export default Navbar