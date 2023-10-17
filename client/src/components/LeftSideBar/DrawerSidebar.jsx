import React from 'react'
import './DrawerSidebar.css'
import './LeftSideBar.css'
import { AiFillPlaySquare, AiOutlineHome, AiFillLike } from "react-icons/ai"
import { MdOutlineExplore, MdOutlineWatchLater } from "react-icons/md"
import { MdOutlineSubscriptions } from "react-icons/md"
import { MdOutlineVideoLibrary } from "react-icons/md"
import { FaHistory } from 'react-icons/fa'
import shorts from './shorts.png'
import { NavLink } from 'react-router-dom'
function DrawerSidebar({toggleDrawerSidebar,toggleDrawer}) {
    return (
        <div className="container_Drawer_Leftsidebar" style={toggleDrawerSidebar}>
            <div className="DrawerLeftSidebar">
                <div className="container2_Drawer_Leftsidebar">
                    <NavLink to={'/'} className="icon_sidebar_div" style={{ flexDirection: "row" }}>
                        <AiOutlineHome size={22} className='icon_sidebar' style={{ margin: "auto 1rem" }} />
                        <div className="text_sidebar_icon">Home</div>
                    </NavLink>
                    <div className="icon_sidebar_div" style={{ flexDirection: "row" }}>
                        <MdOutlineExplore size={22} className='icon_sidebar' style={{ margin: "auto 1rem" }} />
                        <div className="text_sidebar_icon">Explore</div>
                    </div>
                    <div className="icon_sidebar_div" style={{ flexDirection: "row" }}>
                        <img src={shorts} width={19} className='icon_sidebar' style={{ margin: "auto 1rem", filter: "invert(90%)" }} />
                        <div className="text_sidebar_icon">Shorts</div>
                    </div>
                    <div className="icon_sidebar_div" style={{ flexDirection: "row" }}>
                        <MdOutlineSubscriptions size={22} className='icon_sidebar' style={{ margin: "auto 1rem" }} />
                        <div className="text_sidebar_icon" style={{ fontSize: "12px" }}>Subscriptions</div>
                    </div>
                </div>
                <div className="libraryBtn_Drawer_Leftsidebar">
                    <NavLink to={'/library'} className="icon_sidebar_div" style={{ flexDirection: "row" }}>
                        <MdOutlineVideoLibrary size={22} className='icon_sidebar' style={{ margin: "auto 1rem" }} />
                        <div className="text_sidebar_icon" >Library</div>
                    </NavLink>
                    <NavLink to={'/history'} className="icon_sidebar_div" style={{ flexDirection: "row" }}>
                        <FaHistory size={22} className='icon_sidebar' style={{ margin: "auto 1rem" }} />
                        <div className="text_sidebar_icon" >History</div>
                    </NavLink>
                    <NavLink to={'/YourVideo'} className="icon_sidebar_div" style={{ flexDirection: "row" }}>
                        <AiFillPlaySquare size={23} className='icon_sidebar' style={{ margin: "auto 1rem" }} />
                        <div className="text_sidebar_icon" >Your Videos</div>
                    </NavLink>
                    <NavLink to={'/watchlater'} className="icon_sidebar_div" style={{ flexDirection: "row" }}>
                        <MdOutlineWatchLater size={23} className='icon_sidebar' style={{ margin: "auto 1rem" }} />
                        <div className="text_sidebar_icon" >Watch Later</div>
                    </NavLink>
                    <NavLink to={'/LikedVideo'} className="icon_sidebar_div" style={{ flexDirection: "row" }}>
                        <AiFillLike size={23} className='icon_sidebar' style={{ margin: "auto 1rem" }} />
                        <div className="text_sidebar_icon" >Liked Videos</div>
                    </NavLink>

                </div>
                <div className="subscriptions_lsdBar" >
                    <h3>Your Subscriptions</h3>
                    <div className="channel_lsdBar">
                        <p>C</p>
                        <div>Channel</div>
                    </div>
                    <div className="channel_lsdBar">
                        <p>C</p>
                        <div>Channel</div>
                    </div>
                    <div className="channel_lsdBar">
                        <p>C</p>
                        <div>Channel</div>
                    </div>
                    <div className="channel_lsdBar">
                        <p>C</p>
                        <div>Channel</div>
                    </div>
                    <div className="channel_lsdBar">
                        <p>C</p>
                        <div>Channel</div>
                    </div>
                </div>
            </div>
            <div className="container3_Drawer_LeftSidebar" onClick={()=>toggleDrawer()}></div>
        </div>
    )
}

export default DrawerSidebar