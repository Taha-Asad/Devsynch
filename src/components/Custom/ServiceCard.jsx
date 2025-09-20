import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Stack,
} from "@mui/material";
import React from "react";
import "./serviceCard.css";

function ServiceCard({ icon, title, desc }) {
  return (
    <Box sx={{ position: "relative", boxShadow: "4px 4px 4px 0px #8A8A8A40" }}>
      {/* Top-Right Corner */}
      <Box
        className="corner top-right"
        sx={{
          position: "absolute",
        }}
      />
      <Box
        className="corner bottom-left"
        sx={{
          position: "absolute",
        }}
      />
      <Card
        sx={{
          width: "100%",
          textAlign: "left",
          p: 2,
          bgcolor: "#343434",
          position: "relative",
        }}
      >
        <Stack direction="column">
          <CardMedia>{icon}</CardMedia>
          <Typography fontWeight={700} fontSize="15px" color="#ffffff">
            {title}
          </Typography>
          <CardContent
            sx={{ p: 0, fontWeight: 400, fontSize: "15px", color: "#ffffff" }}
          >
            {desc}
          </CardContent>
        </Stack>
      </Card>

      {/* Bottom-Left Corner */}
    </Box>
  );
}

export default ServiceCard;
