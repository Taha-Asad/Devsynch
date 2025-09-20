import React from "react";
import { useMediaQuery, useTheme } from "@mui/material";
import DesktopNavbar from "../navbar/DesktopNavbar";
import MobileNavbar from "../navbar/MobileNavbar";

const Navbar = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  return isDesktop ? <DesktopNavbar /> : <MobileNavbar />;
};

export default Navbar;
