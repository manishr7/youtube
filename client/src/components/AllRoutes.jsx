import React from 'react'
import Library from '../pages/Library/Library';
import WatchHistory from '../pages/WatchHistory/WatchHistory';
import WatchLater from '../pages/WatchLater/WatchLater';
import YourVideo from '../pages/YourVideo/YourVideo';
import LikedVideo from '../pages/LikedVideo/LikedVideo';
import {
    Routes,
    Route,
    Link
  } from "react-router-dom";
  import Home from '../pages/Home/Home';
import VideoPage from './VideoPage/VideoPage';
function AllRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/library' element={<Library/>}/>
      <Route path='/history' element={<WatchHistory/>}/>
      <Route path='/watchlater' element={<WatchLater/>}/>
      <Route path='/YourVideo' element={<YourVideo/>}/>
      <Route path='/LikedVideo' element={<LikedVideo/>}/>
      <Route path='/videopage/:vid' element={<VideoPage/>}/>
        
    </Routes>
  )
}

export default AllRoutes