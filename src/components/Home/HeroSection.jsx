import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React from "react";
import IBM from "../../assets/hero/IBM.svg?react";
import Adobe from "../../assets/hero/Adobe.svg?react";

const HeroSection = () => {
  return (
    <Box
      sx={{
        bgcolor: "black",
        width: "100%",
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Glassy Layer */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(255, 255, 255, 0.1)", // transparent white
          backdropFilter: "blur(12px) saturate(180%)", // blur + saturation
          WebkitBackdropFilter: "blur(12px) saturate(180%)", // Safari support
          border: "1px solid rgba(255, 255, 255, 0.2)",
          boxShadow: "inset 0 0 80px rgba(255,255,255,0.05)",
        }}
      />

      {/* Content */}
      <Container sx={{ position: "relative", zIndex: 2 }}>
        <Stack spacing={{ xs: 3, md: 5 }}>
          {/* Subtitle */}
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontSize: { xs: "16px", sm: "18px", md: "20px" },
              fontWeight: 700,
              color: "#FFEED5",
              textAlign: "left",
            }}
          >
            Sub title / short message / some qoute
          </Typography>

          {/* Title */}
          <Typography
            sx={{
              fontFamily: "Quicksand",
              fontSize: { xs: "28px", sm: "36px", md: "48px" },
              fontWeight: 700,
              color: "#FFEED5",
              textAlign: "left",
            }}
          >
            Title
          </Typography>

          {/* Description */}
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontSize: { xs: "14px", sm: "15px", md: "16px" },
              fontWeight: 400,
              color: "#D9D9D9",
              width: { xs: "100%", md: "55%" },
              textAlign: "left",
              mx: { xs: "auto", md: "0" },
            }}
          >
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            Suspendisse et justo. Praesent mattis commodo augue. Morbi fringilla
            congue libero, ac malesuada vulputate pharetra.
          </Typography>

          {/* Button */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
            }}
          >
            <Button
              sx={{
                border: "1px solid transparent",
                textTransform: "uppercase",
                color: "#FFEED5",
                bgcolor: "#F97316",
                fontSize: "15px",
                px: 2,
                py: 0.5,
                mt: "8px",
                height: "40px",
                width: "200px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.5s ease-in-out",
                ":hover": {
                  bgcolor: "#FFEED5",
                  color: "black",
                },
              }}
            >
              Book a meeting
            </Button>
          </Box>

          {/* Partners */}
          <Stack
            spacing={2}
            sx={{
              textAlign: { xs: "center", md: "left" },
              mt: { xs: 2, md: 4 },
              display: { xs: "none", sm: "block" },
            }}
          >
            <Typography
              sx={{
                fontSize: "15px",
                fontWeight: 400,
                color: "#ffffffff",
                textTransform: "uppercase",
              }}
            >
              Our Partners
            </Typography>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={3}
              justifyContent={{ xs: "center", md: "flex-start" }}
              alignItems="center"
            >
              <IBM style={{ width: "100px", height: "auto" }} />
              <Adobe style={{ width: "100px", height: "auto" }} />
              <IBM style={{ width: "100px", height: "auto" }} />
              <Adobe style={{ width: "100px", height: "auto" }} />
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default HeroSection;
