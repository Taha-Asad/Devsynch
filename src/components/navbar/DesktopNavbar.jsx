import React, { useState, useEffect } from "react";
import { Box, Button, Container, Link, Stack, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router";
import logo from "../../assets/logo/Logo.png";
const DesktopNavbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        top: 0,
        left: 0,
        position: "fixed",
        zIndex: 100,
        padding: "20px",
        backgroundColor: scrolled ? "#333" : "transparent",
        transition: "background-color 0.3s ease-in-out",
        boxShadow: scrolled ? "0 2px 5px rgba(0,0,0,0.2)" : "none",
        display: { xs: "none", md: "block" }, // only show from md upwards
      }}
    >
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <Stack
            direction={"row"}
            alignContent={"center"}
            justifyContent={"center"}
            alignItems={"center"}
            spacing={2}
          >
            <img src={logo} alt="" width={50} height={50} />
            <Typography
              sx={{
                fontFamily: "Quicksand",
                fontWeight: 700,
                color: "#ffffff",
                fontSize: 28,
              }}
            >
              DevSynch
            </Typography>
          </Stack>{" "}
        </Box>
        <Box sx={{ width: "45%" }}>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Link
              component={RouterLink}
              to="/"
              underline="none"
              sx={{ color: "#FFEED5" }}
            >
              Home
            </Link>
            <Link
              component={RouterLink}
              to="/about"
              underline="none"
              sx={{ color: "#FFEED5" }}
            >
              About
            </Link>
            <Link
              component={RouterLink}
              to="/services"
              underline="none"
              sx={{ color: "#FFEED5" }}
            >
              Services
            </Link>
            <Link
              component={RouterLink}
              to="/contact"
              underline="none"
              sx={{ color: "#FFEED5" }}
            >
              Contact
            </Link>
            <Button
              sx={{
                textTransform: "uppercase",
                color: "#FFEED5",
                bgcolor: "#F97316",
                fontSize: "15px",
                px: 2,
                py: 0.5,
                height: "40px",
                ":hover": { bgcolor: "#FFEED5", color: "black" },
              }}
            >
              Meet / Login
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default DesktopNavbar;
