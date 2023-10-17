import React from 'react'
import vid from '../../components/video/Sample.mp4'
import './videoPage.css'
import LikeWatchLaterSaveBtns from './LikeWatchLaterSaveBtns'
import Comment from '../Comment/Comment'
function VideoPage() {
    return (
        <div className="container_videoPage">
            <div className="container2_videoPage">
                <div className="video_display_screen_videoPage">
                    <video src={vid} className='video_showvideo_videoPage' controls autoPlay></video>
                    <div className="video_details_videoPage">
                        <div className="video_btns_title_videoPage">
                            <p className="video_title_videoPage">Title</p>
                            <div className="views_date_btns_videoPage">
                                <div className="views_videoPage"> 5 views <div className="dot"></div> video uploaded 1 year ago
                                </div>
                            </div>
                        </div>
                        <LikeWatchLaterSaveBtns/>
                        <div className='channel_details_videoPage'>
                            <b className="channel_logo_videoPage">
                            <p>C</p>
                            </b>
                            <div className="channel_name_videoPage">Channel name</div>
                        </div>
                        <div className="comments_videoPage">
                            <h2>
                                <u>
                                    comments
                                </u>
                            </h2>
                            <Comment/>
                        </div>
                    </div>
                </div>
                <div className="morevideobar_videoPage">
                    More Videos
                </div>
            </div>
        </div>
    )
}

export default VideoPage