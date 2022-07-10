import {
  Home,
  Tag,
  MailOutline,
  ListAlt,
  MoreHoriz,
  PermIdentity,
  BookmarkBorder,
  NotificationsNone,
  Twitter,
} from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";
import SidebarOption from "./SidebarOption";

const Sidebar = () => {
  return (
    <aside>
      <Twitter />

      <SidebarOption active Icon={Home} text="Home" />
      <SidebarOption Icon={Tag} text="Explore" />
      <SidebarOption Icon={NotificationsNone} text="Notifications" />
      <SidebarOption Icon={MailOutline} text="Messages" />
      <SidebarOption Icon={BookmarkBorder} text="Bookmarks" />
      <SidebarOption Icon={ListAlt} text="Lists" />
      <SidebarOption Icon={PermIdentity} text="Profile" />
      <SidebarOption Icon={MoreHoriz} text="More" />

      <Button>Tweet</Button>
    </aside>
  );
};

export default Sidebar;
