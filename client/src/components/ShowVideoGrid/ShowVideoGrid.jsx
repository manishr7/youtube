import React from 'react'
import ShowVideo from '../ShowVideo/ShowVideo'
import './ShowVideoGrid.css'
function ShowVideoGrid({vids}) {
  return (
    <div className="container_ShowVideoGrid">
      {
        vids? vids.map(vid=>
          {
             return (
              <div key={vid._id} className="Video_Box">
                 <ShowVideo vi={vid}/>
              </div>
             )
          })
          : null
      }
    </div>
  )
}

export default ShowVideoGrid