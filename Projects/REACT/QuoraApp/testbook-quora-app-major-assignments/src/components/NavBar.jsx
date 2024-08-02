import React, { useState } from 'react';
import './NavBar.css';
import { NavLink } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import PersonIcon from '@mui/icons-material/Person';
import QuoraLogo from '../../public/images/QuoraLogoWine.svg';
import KeyboardArrowDownTwoToneIcon from '@mui/icons-material/KeyboardArrowDownTwoTone';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import { Avatar, Button } from '@mui/material';
import { deepOrange } from '@mui/material/colors';
import Logout from './Logout';
import { useAuth } from './AuthContext';

function NavBar() {
  const { isAuthenticated } = useAuth();
  const [isOpenArrowIcon, setIsOpenArrowIcon] = useState(false);

  const showArrowIcon = () => {
    setIsOpenArrowIcon(!isOpenArrowIcon);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">
          <img src={QuoraLogo} alt="Quora Logo" className="logo" />
        </div>
        <div className="navbar-center">
          <NavLink to="/home" className="nav-link" alt="Home" title='Home'><HomeIcon alt="Home" className="nav-icon" /></NavLink>
          <NavLink to="/following" className="nav-link" alt="Following" title="Following"><ListAltOutlinedIcon alt="Icon1" className="nav-icon" /></NavLink>
          <NavLink to="/answer" className="nav-link" alt="Answer" title="Answer"><EditOutlinedIcon alt="Icon2" className="nav-icon" /></NavLink>
          <NavLink to="/notifications" className="nav-link" alt="Notifications" title='Notifications'><NotificationsIcon alt="Notifications" className="nav-icon" /></NavLink>
          <NavLink to="/spaces" className="nav-link" alt="Spaces" title='Spaces'><PersonIcon alt="Profile" className="nav-icon" /></NavLink>
        </div>
        <input type="text" className="navbar__search search-bar" placeholder="Search Quora" />
        <div className="navbar-right">
          <button className="try-quora-plus">Try Quora+</button>
          {isAuthenticated ? (
            <>
              <Avatar title={isAuthenticated.email} alt={isAuthenticated.email} src="path/to/your/avatar.jpg" sx={{ bgcolor: deepOrange[500] }} />
              <Logout />
            </>
          ) : (
            <>
              <Button color="inherit" component={NavLink} to="/">
                Login
              </Button>
            </>
          )}

          <LanguageOutlinedIcon alt="Launguage" className="nav-icon" />
          <button className="add-question">Add Question</button>
          <div id="arrowIcon" onClick={showArrowIcon}><KeyboardArrowDownTwoToneIcon /></div>
        </div>
      </nav>
      {isOpenArrowIcon ? <div className='downArrowShow'>
        <EditOutlinedIcon /> <a> Create post</a>
      </div> : ''}
    </>
  );
}

export default NavBar;
