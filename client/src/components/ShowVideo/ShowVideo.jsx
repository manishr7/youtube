import React from 'react'
import './ShowVideo.css'
import {Link} from 'react-router-dom'
function ShowVideo({vi}) {
  return (
    <>
    <Link to={`/videopage/${vi?._id}`}><video src={`${vi?.video_src}`} className='video_ShowVideo'></video></Link>
    <div className="video_description">
      <div className="channel_logo_app">
        <div className="fstChar_logo_app">
          <>{vi?.uploader?.charAt(0).toUpperCase()}</>
        </div>
      </div>
      <div className="video_details">
        <p className="title_vid_ShowVideo">title</p>
        <pre className="vid_views_UploadTime">10-02-2002</pre>
        <pre className="vid_views_UploadTime">
          5 views <div className="dot"></div> video uploaded 1 year ago
        </pre>
      </div>
    </div>
    </>
  )
}

export default ShowVideo