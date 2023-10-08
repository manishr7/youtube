import React from 'react'
import './Home.css'
import LeftSideBar from "../../components/LeftSideBar/LeftSideBar"
function Home() {
    return (
        <div className='container_Pages_App'>
            <LeftSideBar/>
            <div className="container2_Pages_App">
                Home
            </div>
        </div>
    )
}

export default Home