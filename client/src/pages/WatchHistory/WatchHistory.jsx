import React from 'react'
import vid from "../../components/video/Sample.mp4"
function WatchHistory() {
  const history=[
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
  return (
    <div>WatchHistory</div>
  )
}

export default WatchHistory