import React from 'react'
import './Navbar.css'
import SearchBar from './SearchBar/SearchBar';
import logo from './logo.ico'
import { RiVideoAddLine } from 'react-icons/ri'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { BiUserCircle } from 'react-icons/bi'
import { Link } from 'react-router-dom';
function Navbar({toggleDrawer}) {
    const CurrentUser = 
    {
        result: {
            email: "rawat0809@gmail.com",
            name: "Manish Rawat"
        }
    };

    return (
        <div className='navbar-container'>
            <div className="burger-logo">

                <div className="burger" onClick={toggleDrawer}>
                    <p></p>
                    <p></p>
                    <p></p>
                </div>
                <Link to={'/'} className='logo-navbar'>
                    <img src={logo} alt="" />
                    <p className='logo-navbar-title'>YouTube</p>
                </Link>
            </div>
            <SearchBar />
            <RiVideoAddLine size={22} className={"vid_bell_Navbar"} />
            <div className="apps_box">
                <p className="appbox"></p>
                <p className="appbox"></p>
                <p className="appbox"></p>
                <p className="appbox"></p>
                <p className="appbox"></p>
                <p className="appbox"></p>
                <p className="appbox"></p>
                <p className="appbox"></p>
                <p className="appbox"></p>
            </div>
            <IoMdNotificationsOutline size={22} className={"vid_bell_Navbar"} />
            <div className="Auth_cont_Navbar">
                {
                    CurrentUser ? 
                    (
                       <>
                       <div className="channel_logo_app">
                       <p className="fstChar_logo_app">
                        {
                            CurrentUser.result.name? 
                            (
                                CurrentUser.result.name.charAt(0).toUpperCase()
                            ) :
                            (
                                CurrentUser.result.email.charAt(0).toUpperCase()
                            )
                        }
                       </p>
                       </div>
                       </>
                    ) : 
                    (
                        <>
                            <p className="Auth_Btn">
                                <BiUserCircle size={25} className={"User_circle_navbar"} />
                                <b>Sign in</b>
                            </p>
                        </>
                    )
                }

            </div>
        </div>
    )
}

export default Navbar