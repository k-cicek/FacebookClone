import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import StorefrontOutlinedIcon from "@material-ui/icons/StorefrontOutlined";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import { Avatar, IconButton } from "@material-ui/core";
import AppsIcon from "@material-ui/icons/Apps";
import ForumIcon from "@material-ui/icons/Forum";
import NotificationsAvtiveIcon from "@material-ui/icons/NotificationsActive";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { useStateValue } from "../StateProvider";

function Header() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png"
          alt="Facebook logo"
        />

        <div className="header__input">
          <SearchIcon />
          <input
            placeholder="Search Facebook"
            className="header__input--text"
            type="text"
          />
        </div>
      </div>

      <div className="header__center">
        <div className="header__option header__option--active">
          <HomeIcon style={{ fontSize: 30 }} />
        </div>
        <div className="header__option">
          <PeopleOutlineIcon style={{ fontSize: 30 }} />
        </div>
        <div className="header__option">
          <OndemandVideoIcon style={{ fontSize: 30 }} />
        </div>
        <div className="header__option">
          <StorefrontOutlinedIcon style={{ fontSize: 30 }} />
        </div>
        <div className="header__option">
          <SupervisedUserCircleIcon style={{ fontSize: 30 }} />
        </div>
      </div>

      <div className="header__right">
        <div className="header__info">
          <Avatar src={user.photoURL} />
          <h4>{user.displayName}</h4>
        </div>

        <IconButton>
          <AppsIcon />
        </IconButton>

        <IconButton>
          <ForumIcon />
        </IconButton>

        <IconButton>
          <NotificationsAvtiveIcon />
        </IconButton>

        <IconButton>
          <ArrowDropDownIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
