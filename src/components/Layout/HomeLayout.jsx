import React from "react";
import HeroSection from "../Home/HeroSection";
import OurServices from "../Home/OurServices";
import { Box } from "@mui/material";
import Portfolio from "../Home/Portfolio";
import WhyChooseUs from "../Home/WhyChooseUs";
import Testimonials from "../Home/Testimonials";
import LeaderShip from "../Home/LeaderShip";

const Layout = () => {
  return (
    <Box>
      <HeroSection />
      <OurServices />
      <Portfolio />
      <WhyChooseUs />
      <Testimonials />
      <LeaderShip />
    </Box>
  );
};

export default Layout;
