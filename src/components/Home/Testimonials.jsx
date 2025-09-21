import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

import user1 from "../../assets/user/user-1.jpg";
import user2 from "../../assets/user/user-2.jpg";
import user3 from "../../assets/user/user-3.jpg";
import { Avatar } from "../Custom/AvatarDesign";

// Testimonials array
const TestimonialCards = [
  {
    src: user1,
    alt: "Random guy",
    name: "Ava Morgan",
    content:
      "Finally, a platform that actually cares about artists. My NFT drop sold out in under 48 hours!",
  },
  {
    src: user2,
    alt: "Random guy",
    name: "Ava Morgan",
    content:
      "Finally, a platform that actually cares about artists. My NFT drop sold out in under 48 hours!",
  },
  {
    src: user3,
    alt: "Random guy",
    name: "Ava Morgan",
    content:
      "Finally, a platform that actually cares about artists. My NFT drop sold out in under 48 hours!",
  },
];

const Testimonials = () => {
  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        bgcolor: "#000",
        py: { xs: 4, md: 8 },
      }}
    >
      <Container>
        <Box sx={{ textAlign: "center", mb: { xs: 4, md: 6 } }}>
          <Typography
            fontSize={{ xs: "28px", md: "36px" }}
            fontFamily="Inter"
            color="#FFEED5"
            fontWeight={600}
            sx={{ mb: { xs: 2, md: 3 }, letterSpacing: "0.5px" }}
          >
            "Hear Stories from our customers!"
          </Typography>
          <Typography
            component="p"
            sx={{
              fontSize: { xs: "16px", md: "20px" },
              color: "#fff",
              maxWidth: "750px",
              mx: "auto",
              lineHeight: 1.6,
              px: { xs: 2, md: 0 },
            }}
          >
            Lorem Ipsum, is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a
          </Typography>
        </Box>
        <Grid container spacing={4} columns={{ xs: 4, sm: 8, md: 12 }}>
          {TestimonialCards.map((t, index) => (
            <Grid
              key={index}
              item
              size={{ xs: 12, sm: 4, md: 4 }}
              sx={{ mt: 3 }}
            >
              <Box sx={{ position: "relative", textAlign: "center" }}>
                {/* Circle behind avatar */}
                <Box
                  className="circle"
                  sx={{
                    position: "absolute",
                    bgcolor: "#33FF00",
                    width: { xs: 15, sm: 20, md: 20 },
                    height: { xs: 15, sm: 20, md: 20 },
                    top: -35.2,
                    isolation: "isolate",
                    zIndex: 1,
                    borderRadius: "50%",
                    mixBlendMode: "luminosity",
                  }}
                />
                <Stack direction={"column"} sx={{ alignItems: "center" }}>
                  {/* Wrapper to isolate the avatar from blend effects */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: -40,
                      borderRadius: 50,
                      zIndex: 0,
                    }}
                  >
                    {/* Avatar */}
                    <Avatar
                      className="avatar"
                      src={t.src}
                      alt={t.alt}
                      sx={{
                        width: { xs: 80, sm: 100, md: 100 },
                        height: { xs: 80, sm: 100, md: 100 },
                        border: "3px solid #fff",
                        boxShadow: 3,
                        mixBlendMode: "luminosity",
                        zIndex: 0,
                      }}
                    />
                  </Box>

                  {/* Card */}
                  <Box>
                    {" "}
                    <Card
                      sx={{
                        borderRadius: 3,
                        p: 3,
                        pt: 8, // space for avatar
                        textAlign: "center",
                        minHeight: 200,
                        bgcolor: "#BE5103",
                      }}
                    >
                      <CardContent>
                        <Typography
                          sx={{
                            textTransform: "uppercase",
                            fontWeight: 600,
                            fontFamily: "Outfit",
                            color: "#fff",
                            mb: 1,
                          }}
                        >
                          {t.name}
                        </Typography>
                        <Typography
                          sx={{
                            fontWeight: 400,
                            fontSize: "15px",
                            color: "#fff",
                            px: 1,
                          }}
                        >
                          {t.content}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Box>
                </Stack>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Testimonials;
