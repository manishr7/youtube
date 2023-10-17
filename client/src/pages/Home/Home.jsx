import React from 'react'
import './Home.css'
import LeftSideBar from "../../components/LeftSideBar/LeftSideBar"
import ShowVideoGrid from '../../components/ShowVideoGrid/ShowVideoGrid'
import vid from "../../components/video/Sample.mp4"
function Home() {
    const vids=[
        {
            _id:1,
            video_src:vid,
            channel:"kjadkjnaksjdn",
            title:"video 1",
            uploader:"abcd",
            description:"description of video 1",
        },
        {
            _id:2,
            video_src:vid,
            channel:"Charter",
            title:"video 1",
            uploader:"abcd",
            description:"description of video 2",
        },
        {
            _id:3,
            video_src:vid,
            channel:"YUps",
            title:"video 1",
            uploader:"abcd",
            description:"description of video 3",
        }
        ,
        {
            _id:4,
            video_src:vid,
            channel:"YUps",
            title:"video 1",
            uploader:"abcd",
            description:"description of video 3",
        }
    ]
    const Navlist=["All","Python","Java","C++","Movies","Science","Animation","Gaming","Comedy","Python","Java","C++","Movies","Science","Animation","Gaming"]
    return (
        <div className='container_Pages_App'>
            <LeftSideBar/>
            <div className="container2_Pages_App">
                <div className="navigation_Home">
                    {
                        Navlist.map(m=>
                        {
                            return(
                        <p key={m} className="nav_btn_Home">
                            {m}
                        </p>
                            )
                        })
                    }
                </div>
            <ShowVideoGrid vids={vids}/>
            </div>
        </div>
    )
}

export default Home