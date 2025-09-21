import React, { useState } from "react";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  IconButton,
  Button,
  Stack,
  Typography,
} from "@mui/material";
import logo from "../../assets/logo/Logo.png";
import { Link as RouterLink } from "react-router";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const MobileNavbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        p: 2,
        display: { xs: "flex", md: "none" }, // only show on xs-sm screens
        justifyContent: "space-between",
        alignItems: "center",
        bgcolor: "#333",
        zIndex: 1200,
      }}
    >
      <Stack
        direction={"row"}
        spacing={0.5}
        alignContent={"center"}
        alignItems={"center"}
      >
        <img src={logo} alt="" width={42} height={42} />
        <Typography
          sx={{
            fontFamily: "Quicksand",
            fontWeight: 700,
            color: "#ffffff",
            fontSize: 20,
          }}
        >
          DevSynch
        </Typography>
      </Stack>

      <IconButton onClick={() => setDrawerOpen(true)}>
        <MenuIcon sx={{ color: "#FFEED5" }} />
      </IconButton>

      {/* Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{ sx: { bgcolor: "#333", width: "70%" } }}
      >
        <Box sx={{ display: "flex", justifyContent: "flex-end", p: 2 }}>
          <IconButton onClick={() => setDrawerOpen(false)}>
            <CloseIcon sx={{ color: "#FFEED5" }} />
          </IconButton>
        </Box>
        <List>
          {navLinks.map((link) => (
            <ListItem key={link.path} disablePadding>
              <ListItemButton
                component={RouterLink}
                to={link.path}
                onClick={() => setDrawerOpen(false)}
              >
                <ListItemText
                  primary={link.label}
                  primaryTypographyProps={{
                    color: "#FFEED5",
                    fontSize: "18px",
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
          <Box sx={{ p: 2 }}>
            <Button
              fullWidth
              sx={{
                textTransform: "uppercase",
                color: "#FFEED5",
                bgcolor: "#F97316",
                ":hover": { bgcolor: "#FFEED5", color: "black" },
              }}
            >
              Meet / Login
            </Button>
          </Box>
        </List>
      </Drawer>
    </Box>
  );
};

export default MobileNavbar;
