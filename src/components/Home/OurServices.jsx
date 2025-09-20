import React, { useEffect, useRef } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Paper,
  Stack,
  Button,
} from "@mui/material";
import DesignIcon from "../../assets/Icons/design.svg?react";
import MarketingIcon from "../../assets/Icons/Marketing.svg?react";
import SocialMediaIcon from "../../assets/Icons/SocialMedia.svg?react";
import SupportIcon from "../../assets/Icons/Support.svg?react";
import CustomDevelopmentIcons from "../Custom/CustomDevelopmentIcons";
import EcommerceIcons from "../Custom/EcommerceIcons";
import ServiceCard from "../Custom/ServiceCard";

const serviceCard = [
  {
    icon: <DesignIcon width={32} height={32} />,
    title: "Design",
    desc: "Lorem ipsum dolor sit amet ,consectetuer adipiscing elit.Suspendisse et justo. Praesent mattis commodo augue.",
  },
  {
    icon: <CustomDevelopmentIcons width={32} height={32} />,
    title: "Development",
    desc: "Lorem ipsum dolor sit amet ,consectetuer adipiscing elit.Suspendisse et justo. Praesent mattis commodo augue.",
  },
  {
    icon: <MarketingIcon width={32} height={32} />,
    title: "Marketing",
    desc: "Lorem ipsum dolor sit amet ,consectetuer adipiscing elit.Suspendisse et justo. Praesent mattis commodo augue.",
  },
  {
    icon: <SocialMediaIcon width={32} height={32} />,
    title: "Social Media",
    desc: "Lorem ipsum dolor sit amet ,consectetuer adipiscing elit.Suspendisse et justo. Praesent mattis commodo augue.",
  },
  {
    icon: <EcommerceIcons width={32} height={32} />,
    title: "E-Commerce",
    desc: "Lorem ipsum dolor sit amet ,consectetuer adipiscing elit.Suspendisse et justo. Praesent mattis commodo augue.",
  },
  {
    icon: <SupportIcon width={32} height={32} />,
    title: "Help & Support",
    desc: "Lorem ipsum dolor sit amet ,consectetuer adipiscing elit.Suspendisse et justo. Praesent mattis commodo augue.",
  },
];

export default function OurServices() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const cards = Array.from(container.querySelectorAll(".service-card"));

    const reveal = () => {
      cards.forEach((card, idx) => {
        setTimeout(() => {
          card.classList.add("visible");
        }, idx * 150);
      });
    };

    const hide = () => {
      cards.forEach((card) => card.classList.remove("visible"));
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            reveal();
          } else {
            hide();
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(container);

    return () => observer.disconnect();
  }, []);

  return (
    <Box
      component="section"
      sx={{
        bgcolor: "#000000ff",
        py: { xs: 3, md: 5 }, // Good vertical spacing
        position: "relative",
        zIndex: "-100",
      }}
    >
      <Container
        sx={{
          textAlign: "center",
          px: { xs: 2, md: 0 },
        }}
      >
        <Container maxWidth={"lg"}>
          <Stack
            direction={"column"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Typography
              fontSize={{ xs: "28px", md: "36px" }}
              fontFamily={"Quicksand"}
              color="#ffffff"
              fontWeight={500}
              sx={{ mb: 1 }}
            >
              How can We Help You
            </Typography>
            <Typography
              component={"p"}
              textAlign={"center"}
              fontWeight={400}
              color="#FFFFFF"
              fontFamily={"Inter"}
              fontSize={{ xs: 15, md: 20 }}
            >
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              Suspendisse et justo. Praesent mattis commodo augue.
            </Typography>
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
              Book a meeting
            </Button>
          </Stack>
        </Container>
        <Box ref={containerRef} sx={{ mt: { xs: 2, md: 3 } }}>
          <Container>
            <Grid
              container
              spacing={{ xs: 3, md: 3.5 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              {serviceCard.map((card, index) => (
                <Grid item size={{ xs: 12, sm: 8, md: 4 }} key={index}>
                  <ServiceCard
                    icon={card.icon}
                    title={card.title}
                    desc={card.desc}
                  />
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
      </Container>
    </Box>
  );
}
