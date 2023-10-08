
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import AllRoutes from './components/AllRoutes';
import DrawerSidebar from './components/LeftSideBar/DrawerSidebar';
import { useState } from 'react';
function App() {
  const [toggleDrawerSidebar, seTtoggleDrawerSidebar] = useState({ display: "none" })
  const toggleDrawer = () => {
    console.log(toggleDrawerSidebar)
    if (toggleDrawerSidebar.display == "none") {
      seTtoggleDrawerSidebar({ display: "flex" })
    }
    else {
      seTtoggleDrawerSidebar({ display: "none"})
    }
  }

return (
  <div className="App">
    <Router>
      <Navbar toggleDrawer={toggleDrawer} />
      <DrawerSidebar toggleDrawer={toggleDrawer} toggleDrawerSidebar={toggleDrawerSidebar} />
      <AllRoutes />
    </Router>
  </div>
);
}

export default App;
