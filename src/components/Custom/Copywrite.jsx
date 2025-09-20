import { Box, Container, Typography } from "@mui/material";
import React from "react";

function Copywrite() {
  return (
    <Box
      sx={{
        bgcolor: "#BE5103",
        height: "10vh",
        textAlign: "center",
      }}
    >
      <Container>
        <Typography
          sx={{ color: "#FFEED5", fontSize: "16px", fontWeight: 400, pt: 3 }}
        >
          Copyright © 2025 [Company Name] | Powered by [Company Name]
        </Typography>
      </Container>
    </Box>
  );
}

export default Copywrite;
