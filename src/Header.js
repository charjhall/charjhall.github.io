import React from "react";
import "./css/Header.css";
import logo from "./img/logo.png";
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import EmailIcon from '@mui/icons-material/Email';
import ArticleIcon from '@mui/icons-material/Article';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';

export default function Header(props) {

  return (
    <div class="nav-menu">
      <img src={logo} alt="Logo" style={{  height: "128px", width: "auto", padding: 0}} />
      <div class="inner-menu">
        <BottomNavigation
          onChange={(event, newValue) => {
            props.onClick(newValue);
          }}
        >
          <BottomNavigationAction value="Home" label="Home" icon={<HomeIcon />} />
          <BottomNavigationAction value="Bio" label="Bio" icon={<FavoriteIcon />} />
          <BottomNavigationAction value="Contact" label="Contact" icon={<EmailIcon />} />
          <BottomNavigationAction value="Resume" label="Resume" icon={<ArticleIcon />} />
          <BottomNavigationAction value="Meal Prep" label="Meal Prep" icon={<RestaurantMenuIcon />} />
        </BottomNavigation>
      </div>
    </div>
  );
}
