import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import image1 from "../../assets/portfolio/img1.jpg";
import image2 from "../../assets/portfolio/image2.jpg";
import image3 from "../../assets/portfolio/image3.jpg";
import image4 from "../../assets/portfolio/image4.jpg";

// Portfolio Array // Can be connected to backend or changed no idea ?? Just placing place holder so i can create web structure
const PortfolioCard = [
  {
    image: image1,
    alt: "Can be connected to backend or changed no idea ?? Just placing place holder so i can create web structure",
  },
  {
    image: image2,
    alt: "Can be connected to backend or changed no idea ?? Just placing place holder so i can create web structure",
  },
  {
    image: image3,
    alt: "Can be connected to backend or changed no idea ?? Just placing place holder so i can create web structure",
  },
  {
    image: image4,
    alt: "Can be connected to backend or changed no idea ?? Just placing place holder so i can create web structure",
  },
];

const Portfolio = () => {
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
        {/* Heading + Text */}
        <Box
          sx={{
            textAlign: "center",
            mb: { xs: 4, md: 5 },
            px: { xs: 2, md: 6 },
          }}
        >
          <Typography
            fontSize={{ xs: "28px", md: "36px" }}
            fontFamily={"Inter"}
            color="#ffffff"
            fontWeight={600}
            sx={{
              mb: { xs: 2, md: 3 },
              letterSpacing: "0.5px",
            }}
          >
            Portfolio
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
            Lorem Ipsum, is simply dummy text of the printing and typesetting
            industry. Lorem ipsum is a great font system to complete hierarchy
            between text
          </Typography>
        </Box>

        {/* Grid Section */}
        <Grid container spacing={3} columns={{ xs: 4, sm: 8, md: 12 }}>
          {PortfolioCard.map((images, index) => (
            <Grid key={index} item size={{ xs: 12, sm: 4, md: 3 }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  component="img"
                  src={images.image}
                  alt={images.alt}
                  sx={{
                    width: { xs: "100%", sm: "260px", md: "279px" },
                    height: { xs: "200px", sm: "260px", md: "279px" },
                    objectFit: "cover",
                    borderRadius: "12px",
                    display: "block",
                    boxShadow: "0 4px 15px rgba(0,0,0,0.35)",
                  }}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            m: 2,
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
            Show More
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Portfolio;
