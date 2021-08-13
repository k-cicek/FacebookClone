import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import ExpandMoreOutlined from "@material-ui/icons/ExpandMoreOutlined";
import { useStateValue } from "../StateProvider";

function Sidebar() {
  const [{ user }, dispatch] = useStateValue();
  
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <SidebarRow src={user.photoURL} title={user.displayName} />
        <SidebarRow
          url="https://static.xx.fbcdn.net/rsrc.php/v3/yi/r/FZK_jEWapM0.png"
          title="COVID-19 information Centre"
        />
        <SidebarRow
          url="https://www.facebook.com/rsrc.php/v3/yj/r/tSXYIzZlfrS.png"
          title="Find Friends"
        />
        <SidebarRow
          url="https://www.facebook.com/rsrc.php/v3/yj/r/Im_0d7HFH4n.png"
          title="Groups"
        />
        <SidebarRow
          url="https://www.facebook.com/rsrc.php/v3/y4/r/MN44Sm-CTHN.png"
          title="Marketplace"
        />
        <SidebarRow
          url="https://www.facebook.com/rsrc.php/v3/y-/r/FhOLTyUFKwf.png"
          title="Watch"
        />
        <SidebarRow
          url="https://www.facebook.com/rsrc.php/v3/yx/r/N7UOh8REweU.png"
          title="Events"
        />
        <SidebarRow
          url="https://www.facebook.com/rsrc.php/v3/yJ/r/tYxGXJRPH5q.png"
          title="Memories"
        />
        <SidebarRow
          url="https://www.facebook.com/rsrc.php/v3/yA/r/KlDlsO3UxDM.png"
          title="Saved"
        />
        <SidebarRow
          url="https://www.facebook.com/rsrc.php/v3/yj/r/0gH3vbvr8Ee.png"
          title="Pages"
        />
        <SidebarRow
          Icon={ExpandMoreOutlined}
          className="ExpandMoreOut"
          title="See More"
        />
      </div>
      <div className="sidebar__bottom">
        <div className="sidebar__bottom--title">
          <h3>Your shortcuts</h3>
        </div>
        <div className="sidebar__bottom--content">
          <SidebarRow
            src="https://e7.pngegg.com/pngimages/727/102/png-clipart-autocad-logo-autocad-civil-3d-computer-aided-design-autodesk-mechanical-miscellaneous-angle.png"
            title="Autocad"
          />
          <SidebarRow
            src="https://cdn.shopify.com/s/files/1/1061/1924/products/OMG_Face_Emoji_large.png?v=1571606037"
            title="OMG"
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
