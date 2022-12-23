import React from 'react'
import './FooterStyles.css'
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa'


function Footer() {
    return (
        <div className='footer'>
            <div className="container">
                <div className="top">
                    <a href=''><h3>OrKHAN Çimerliyi</h3></a>
                    <div className="social">
                        <a href='https://www.facebook.com/' target={'_blank'}><FaFacebook className='icon' /></a>
                        <a href='https://www.instagram.com/' target={'_blank'}><FaInstagram className='icon' /></a>
                        <a href='https://www.twitter.com/' target={'_blank'}><FaTwitter className='icon' /></a>
                        <a href='https://www.pinterest.com/' target={'_blank'}><FaPinterest className='icon' /></a>
                        <a href='https://www.youtube.com/' target={'_blank'}><FaYoutube className='icon' /></a>
                    </div>
                </div>
                <div className="bottom">
                    <div className="left">
                        <ul>
                            <a href=''><li>Haqqında</li></a>
                            <a href=''><li>Tərəfdaşlıqlar</li></a>
                            <a href=''><li>Karyera</li></a>
                            <a href=''><li>Xəbərlər</li></a>
                            <a href=''><li>Reklam</li></a>
                        </ul>
                    </div>
                    <div className="right">
                        <ul>
                        <a href=''><li>Əlaqə</li></a>
                        <a href=''><li>Şərtlər</li></a>
                        <a href=''><li>Siyasət</li></a>
                        <a href=''><li>Məxfilik</li></a>
                        <a href=''><li>Qiymətləndirmə</li></a>
                            
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
