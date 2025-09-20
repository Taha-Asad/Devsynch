import { Box, Container, Grid, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import Stats from "../Custom/Stats";
import { Rating } from "@mui/material";

const whyChooseUs = [
  {
    title: "Business",
    stars: (
      <Rating value={5} precision={0.5} readOnly sx={{ color: "#FFD700" }} />
    ),
    rating: "5.0",
    desc: "Working with them was enjoyable and professional too! They got all what you needed in one place",
  },
  {
    title: "Business",
    stars: (
      <Rating value={5} precision={0.5} readOnly sx={{ color: "#FFD700" }} />
    ),
    rating: "5.0",
    desc: "Working with them was enjoyable and professional too! They got all what you needed in one place",
  },
];

const WhyChooseUs = () => {
  return (
    <Box sx={{ bgcolor: "#000000", py: { xs: 6, md: 10 } }}>
      <Container maxWidth="lg" sx={{ textAlign: "center" }}>
        {/* Heading */}
        <Typography
          sx={{
            fontFamily: "Inter",
            fontWeight: 700,
            color: "#ffffff",
            fontSize: { xs: "28px", md: "36px" },
            mb: 2,
          }}
        >
          Why <span style={{ color: "#FFEED5" }}>Business Professionals</span>
          <br />
          choose us!
        </Typography>

        {/* Subheading */}
        <Typography
          component="p"
          sx={{
            fontFamily: "Inter",
            fontSize: { xs: "16px", md: "20px" },
            color: "#ffffff",
            maxWidth: "750px",
            mx: "auto",
            lineHeight: 1.6,
            letterSpacing: 1,
            mb: { xs: 4, md: 6 },
          }}
        >
          Various businesses that choose to work with us
        </Typography>

        {/* Cards */}
        <Grid
          container
          spacing={3}
          columns={{ xs: 4, sm: 8, md: 12 }}
          justifyContent="center" // ✅ keeps them centered if fewer cards
        >
          {whyChooseUs.map((chooseUs, index) => (
            <Grid key={index} item size={{ xs: 12, sm: 4, md: 3 }}>
              <Paper
                elevation={1}
                sx={{
                  bgcolor: "#101010",
                  p: { xs: 3, md: 4 },
                  borderRadius: 2,
                  height: "100%",
                }}
              >
                <Stack
                  direction="column"
                  spacing={1}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  <Typography
                    component="h3"
                    fontWeight={600}
                    fontSize="22px"
                    color="#ffffff"
                  >
                    {chooseUs.title}
                  </Typography>
                  {chooseUs.stars}
                  <Typography
                    color="#ffffff"
                    fontSize="15px"
                    fontFamily="Inter"
                  >
                    {chooseUs.rating}
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: 400,
                      fontSize: "15px",
                      color: "#ffffff",
                      mt: 1,
                    }}
                  >
                    {chooseUs.desc}
                  </Typography>
                </Stack>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Stats Section */}
      <Stats />
    </Box>
  );
};

export default WhyChooseUs;
