import React from "react";
import DevelopmentCodeIcon from "../../assets/Icons/DevelopmentCode.svg?react";
import DevelopmentSkeletonIcon from "../../assets/Icons/DevelopmentSkeleton.svg?react";
import { Box } from "@mui/material";

function CustomDevelopmentIcons({ ...props }) {
  return (
    <Box
      sx={{
        position: "relative",
        display: "inline-block",
        width: "31px",
        height: "31x",
      }}
    >
      <DevelopmentSkeletonIcon
        {...props}
        style={{
          width: "100%",
          height: "100%",
        }}
      />
      <DevelopmentCodeIcon
        {...props}
        style={{
          position: "absolute",
          width: "60%",
          height: "35%",
          top: "17%",
          left: "-3%",
        }}
      />
    </Box>
  );
}

export default CustomDevelopmentIcons;
