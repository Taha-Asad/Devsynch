import React from "react";
import Banner from "../Custom/Banner";
import Copywrite from "../Custom/Copywrite";
import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  Link,
  Tooltip,
  IconButton,
} from "@mui/material";
import logoName from "../../assets/logo/logoname.png";
import LogoSymbol from "../../assets/logo/logoSymbol.svg?react";
import { Link as RouterLink } from "react-router";
import {
  Facebook,
  Google,
  Instagram,
  LinkedIn,
  Twitter,
} from "@mui/icons-material";

const Icons = [
  {
    icon: <Facebook />,
    title: "Facebook",
    link: "https://mui.com/material-ui/react-tooltip/",
  },
  { icon: <Instagram />, title: "Instagram", link: "" },
  { icon: <Twitter />, title: "twitter", link: "" },
  { icon: <Google />, title: "Google", link: "" },
  { icon: <LinkedIn />, title: "LinkedIn", link: "" },
];

const Footer = () => {
  return (
    <Box
      component={"section"}
      sx={{
        position: "relative",
        bgcolor: "#000000ff",
        mt: 10,
        pt: { xs: 4, md: 8 },
      }}
    >
      <Banner />

      {/* Main Footer Content */}
      <Box
        sx={{
          py: { xs: 4, md: 8 },
        }}
      >
        <Container>
          <Grid
            container
            spacing={{ xs: 4, sm: 5, md: 6 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {/* Logo & Description */}
            <Grid item size={{ xs: 12, sm: 4, md: 3 }}>
              <Stack direction={"column"} spacing={2}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: { xs: "center", md: "flex-start" },
                    mb: 2,
                  }}
                >
                  <Stack direction={"row"} spacing={2} alignItems="center">
                    <LogoSymbol width={50} height={50} />
                    <img src={logoName} alt="logo" height={"40px"} />
                  </Stack>
                </Box>

                <Typography
                  sx={{
                    fontWeight: 400,
                    fontSize: "16px",
                    color: "#FFEED5",
                    textAlign: { xs: "center", md: "left" },
                    lineHeight: 1.6,
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </Typography>

                {/* Social Icons */}
                <Stack
                  direction="row"
                  spacing={2}
                  justifyContent={{ xs: "center", md: "flex-start" }}
                  mt={2}
                >
                  {Icons.map((icon, index) => (
                    <Tooltip key={index} title={icon.title}>
                      <RouterLink to={icon.link}>
                        <IconButton
                          sx={{
                            color: "#FFEED5",
                            transition: "all 0.5s ease-in-out",
                            "&:hover": { bgcolor: "#BE5103" },
                          }}
                        >
                          {icon.icon}
                        </IconButton>
                      </RouterLink>
                    </Tooltip>
                  ))}
                </Stack>
              </Stack>
            </Grid>

            {/* Company Links */}
            <Grid item size={{ xs: 12, sm: 4, md: 3 }}>
              <Stack
                direction={"column"}
                spacing={1.5}
                alignItems={{ xs: "center", md: "flex-start" }}
                textAlign={{ xs: "center", md: "left" }}
              >
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontWeight: 700,
                    fontSize: "22px",
                    color: "#FFEED5",
                    mb: 1,
                  }}
                >
                  Company
                </Typography>
                {["Home", "About", "Services", "Contact"].map((item, i) => (
                  <Link
                    key={i}
                    component={RouterLink}
                    to={`/${item.toLowerCase()}`}
                    underline="none"
                    sx={{
                      color: "#FFEED5",
                      fontSize: "15px",
                      fontWeight: 400,
                      "&:hover": { color: "#BE5103" },
                    }}
                  >
                    {item}
                  </Link>
                ))}
              </Stack>
            </Grid>

            {/* Business Links */}
            <Grid item size={{ xs: 12, sm: 4, md: 3 }}>
              <Stack
                direction={"column"}
                spacing={1.5}
                alignItems={{ xs: "center", md: "flex-start" }}
                textAlign={{ xs: "center", md: "left" }}
              >
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontWeight: 700,
                    fontSize: "22px",
                    color: "#FFEED5",
                    mb: 1,
                  }}
                >
                  Business
                </Typography>
                {["Projects", "Team", "Facts", "Customer"].map((item, i) => (
                  <Link
                    key={i}
                    component={RouterLink}
                    to={`/${item.toLowerCase()}`}
                    underline="none"
                    sx={{
                      color: "#FFEED5",
                      fontSize: "15px",
                      fontWeight: 400,
                      "&:hover": { color: "#BE5103" },
                    }}
                  >
                    {item}
                  </Link>
                ))}
              </Stack>
            </Grid>

            {/* Contact Info */}
            <Grid item size={{ xs: 12, sm: 4, md: 3 }}>
              <Stack
                direction={"column"}
                spacing={1.5}
                alignItems={{ xs: "center", md: "flex-start" }}
                textAlign={{ xs: "center", md: "left" }}
              >
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontWeight: 700,
                    fontSize: "22px",
                    color: "#FFEED5",
                    mb: 1,
                  }}
                >
                  Get In Touch
                </Typography>
                {["Address", "Email", "Contact Info:", "Phone / Socials"].map(
                  (item, i) => (
                    <Typography
                      key={i}
                      sx={{
                        fontSize: "16px",
                        fontWeight: 400,
                        color: "#FFEED5",
                      }}
                    >
                      {item}
                    </Typography>
                  )
                )}
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Copywrite />
    </Box>
  );
};

export default Footer;
