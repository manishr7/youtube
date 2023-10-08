import React from 'react'
import Library from '../pages/Library/Library';
import {
    Routes,
    Route,
    Link
  } from "react-router-dom";
  import Home from '../pages/Home/Home';
function AllRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/library' element={<Library/>}/>
        
    </Routes>
  )
}

export default AllRoutes