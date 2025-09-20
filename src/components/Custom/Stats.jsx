import { Box, Typography, Divider, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import React from "react";
const stats = [
  { value: 90, suffix: "%", label: "Client Response Time" },
  { value: 88, suffix: "+", label: "Orders Completed" },
  { value: 45, suffix: "+", label: "Willing to Sign Contract" },
  { value: 10, suffix: "+", label: "Branches Worldwide" },
];

const Stats = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      ref={ref}
      sx={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        justifyContent: "center",
        alignItems: "center",
        mt: 6,
        py: 4,
        bgcolor: "#5A5A5A1A",
        gap: isMobile ? 2 : 6, // spacing between stats & divider
      }}
    >
      {stats.map((item, i) => (
        <React.Fragment key={i}>
          {/* Stat block */}
          <Box sx={{ textAlign: "center", px: 2 }}>
            <Typography
              sx={{
                fontSize: { xs: "24px", md: "32px" },
                fontWeight: 700,
                color: "#ABD9D9",
              }}
            >
              {inView && (
                <CountUp end={item.value} duration={2.5} suffix={item.suffix} />
              )}
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "14px", md: "16px" },
                color: " #ABD9D9",
                mt: 1,
              }}
            >
              {item.label}
            </Typography>
          </Box>

          {/* Divider only between items */}
          {i !== stats.length - 1 && (
            <Divider
              orientation={isMobile ? "horizontal" : "vertical"}
              sx={{
                alignSelf: "center", // keeps it centered with stats
                bgcolor: "rgba(255,255,255,0.3)",
                width: isMobile ? "60%" : "2px",
                height: isMobile ? "2px" : "60px",
              }}
            />
          )}
        </React.Fragment>
      ))}
    </Box>
  );
};

export default Stats;
