import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React from "react";

function Banner() {
  return (
    <Box
      sx={{
        bgcolor: "#BE5103",
        py: { xs: 4, md: 6 },
        px: { xs: 2, md: 5 },
      }}
    >
      <Container>
        <Stack
          direction={{ xs: "column", md: "row" }} // column on mobile, row on desktop
          spacing={{ xs: 3, md: 2 }}
          alignItems={"center"}
          justifyContent={{ xs: "center", md: "space-around" }}
        >
          <Box sx={{ minWidth: "60%" }}>
            <Stack direction={"column"} spacing={2}>
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontWeight: 700,
                  fontSize: { xs: "20px", md: "24px" },
                  color: "#FFEED5",
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                Would you like to start a project with us?
              </Typography>
              <Typography
                sx={{
                  fontWeight: 400,
                  fontSize: { xs: "14px", md: "16px" },
                  color: "#ffffff",
                  maxWidth: "600px",
                  lineHeight: 1.6,
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                Etiam erat lectus, finibus eget commodo quis, tincidunt eget
                leo. Nullam quis vulputate orci, ac accumsan quam. Morbi
                fringilla congue libero.
              </Typography>
            </Stack>
          </Box>
          <Button
            sx={{
              border: "1px solid transparent",
              textTransform: "uppercase",
              color: "#FFEED5",
              bgcolor: "#000000",
              fontSize: "15px",
              px: 2,
              py: 0.5,
              mt: "16px",
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
        </Stack>
      </Container>
    </Box>
  );
}

export default Banner;
