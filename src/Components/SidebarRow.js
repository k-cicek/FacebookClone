import React from "react";
import { Avatar } from "@material-ui/core";
import "./SidebarRow.css";

const SidebarRow = ({ src, url, Icon, title }) => {
  return (
    <div className="sidebarRow">
      {src && <Avatar className="sidebarRow__avatar" src={src} />}
      {Icon && <Icon />}
      {url && <img className="sidebarRow__image" src={url} alt="" />}

      <p>{title}</p>
    </div>
  );
};

export default SidebarRow;
