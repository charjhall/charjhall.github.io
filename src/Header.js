import React from "react";
import "./css/Header.css";
import logo from "./img/logo.png";
import { BottomNavigation } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import { styled } from "@mui/material/styles";
import MuiBottomNavigationAction from "@mui/material/BottomNavigationAction";

const BottomNavigationAction = styled(MuiBottomNavigationAction)(`
  color: #061E78
  }
`);

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
          <BottomNavigationAction value="Meal Prep" label="Meal Prep" icon={<RestaurantMenuIcon />} />
        </BottomNavigation>
      </div>
    </div>
  );
}
