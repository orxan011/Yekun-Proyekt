import React, { useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import { BsPerson } from 'react-icons/bs'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa'

import { Link } from 'react-scroll'

import './NavbarStyles.css'

function Navbar() {
    const [nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav)

    return (
        <div name='home' className={nav ? 'navbar navbar-bg' : 'navbar'}>
            <div className={nav ? 'logo dark' : 'logo'}>
                <a href=''><h2 className='orkhan'>OrKHAN AirTicket</h2></a>
            </div>
            <ul className="nav-menu">
                <a href=''><li><button>Ev</button></li></a>
                <Link to='destinations' smooth={true} duration={500} ><li><button>Gediş nöqtəsi</button></li></Link>
                <Link to='carousel' smooth={true} duration={500} ><li><button>Səyahət</button></li></Link>
                <Link to='search' smooth={true} duration={500} ><li><button>Rezerve</button></li></Link>
                <Link to='views' smooth={true} duration={500} ><li><button>Mənzərələr</button></li></Link>
            </ul>
            <div className="nav-icons">
                <BiSearch className='icon' style={{ marginRight: '1rem' }} />
                <BsPerson className='icon' />
            </div>
            <div className="hamburger" onClick={handleNav}>
                {!nav ? (<HiOutlineMenuAlt4 className='icon' />) : (<AiOutlineClose style={{ color: '#000' }} className='icon' />)}

            </div>

            <div className={nav ? 'mobile-menu active' : 'mobile-menu'}>
                <ul className="mobile-nav">
                <Link to='home' smooth={true} duration={500} ><li>Ev</li></Link>
                <Link to='destinations' smooth={true} duration={500} ><li>Gediş nöqtesi</li></Link>
                <Link to='carousel' smooth={true} duration={500} ><li>Seyahet</li></Link>
                <Link to='search' smooth={true} duration={500} ><li>Rezerve</li></Link>
                <Link to='views' smooth={true} duration={500} ><li>Menzereler</li></Link>
                </ul>
                <div className="mobile-menu-bottom">
                    <div className="menu-icons">
                        <button>Axtarış</button>
                        <button>Hesab</button>
                    </div>
                    <div className="social-icons">
                    <a href='https://www.facebook.com/' target={'_blank'}><FaFacebook className='icon' /></a>
                    <a href='https://www.instagram.com/' target={'_blank'}><FaInstagram className='icon' /></a>
                    <a href='https://www.twitter.com/' target={'_blank'}><FaTwitter className='icon' /></a>
                    <a href='https://www.pinterest.com/' target={'_blank'}><FaPinterest className='icon' /></a>
                    <a href='https://www.youtube.com/' target={'_blank'}><FaYoutube className='icon' /></a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Navbar
