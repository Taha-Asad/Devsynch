import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { Avatar } from "../Custom/AvatarDesign";
import user1 from "../../assets/user/user-1.jpg";
import user2 from "../../assets/user/user-2.jpg";
import user3 from "../../assets/user/user-3.jpg";
const LeaderShip = () => {
  return (
    <Box
      component={"section"}
      sx={{
        position: "relative",
        bgcolor: "#000000ff",
        mt: 10,
        py: { xs: 4, md: 8 },
      }}
    >
      <Container>
        <Box sx={{ textAlign: "center", mb: { xs: 4, md: 6 } }}>
          <Typography
            fontSize={{ xs: "28px", md: "36px" }}
            fontFamily={"Inter"}
            color="#FFEED5"
            fontWeight={600}
            sx={{
              mb: { xs: 2, md: 3 },
              letterSpacing: "0.5px",
            }}
          >
            Meet Our leadership
          </Typography>
          <Typography
            component={"p"}
            sx={{
              fontSize: { xs: "16px", md: "20px" },
              color: "#ffffff",
              maxWidth: "750px",
              mx: "auto",
              lineHeight: 1.6,
            }}
          >
            Lorem Ipsum,is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a
          </Typography>
        </Box>
        <Grid container spacing={3} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item size={{ xs: 12, sm: 4, md: 4 }}>
            <Stack
              direction={"column"}
              spacing={3}
              sx={{ alignItems: "center" }}
            >
              <Avatar
                alt={"leader Image"}
                src={user1}
                sx={{
                  width: { xs: 180, sm: 200, md: 200 },
                  height: { xs: 180, sm: 200, md: 200 },
                  border: "3px solid #fff",
                  boxShadow: 3,
                }}
              />
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontSize: "20px",
                  color: "#FFEED5",
                  fontWeight: 700,
                }}
              >
                Name
              </Typography>
              <Typography
                sx={{ fontSize: "24px", color: "#ffffff", fontWeight: 400 }}
              >
                Job Title
              </Typography>
            </Stack>
          </Grid>
          <Grid item size={{ xs: 12, sm: 4, md: 4 }}>
            <Stack
              direction={"column"}
              spacing={3}
              sx={{ alignItems: "center" }}
            >
              <Avatar
                alt={"leader Image"}
                src={user2}
                sx={{
                  width: { xs: 180, sm: 200, md: 200 },
                  height: { xs: 180, sm: 200, md: 200 },
                  border: "3px solid #fff",
                  boxShadow: 3,
                }}
              />
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontSize: "20px",
                  color: "#FFEED5",
                  fontWeight: 700,
                }}
              >
                Name
              </Typography>
              <Typography
                sx={{ fontSize: "24px", color: "#ffffff", fontWeight: 400 }}
              >
                Job Title
              </Typography>
            </Stack>
          </Grid>
          <Grid item size={{ xs: 12, sm: 4, md: 4 }}>
            <Stack
              direction={"column"}
              spacing={3}
              sx={{ alignItems: "center" }}
            >
              <Avatar
                alt={"leader Image"}
                src={user3}
                sx={{
                  width: { xs: 180, sm: 200, md: 200 },
                  height: { xs: 180, sm: 200, md: 200 },
                  border: "3px solid #fff",
                  boxShadow: 3,
                }}
              />
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontSize: "20px",
                  color: "#FFEED5",
                  fontWeight: 700,
                }}
              >
                Name
              </Typography>
              <Typography
                sx={{ fontSize: "24px", color: "#ffffff", fontWeight: 400 }}
              >
                Job Title
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default LeaderShip;
