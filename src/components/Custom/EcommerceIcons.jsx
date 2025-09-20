import { Box } from "@mui/material";
import React from "react";
import HandleIcon from "../../assets/Icons/Handle.svg?react";
import RodesIcon from "../../assets/Icons/Rodes.svg?react";
import BucketIcon from "../../assets/Icons/Bucket.svg?react";

function EcommerceIcons() {
  return (
    <Box sx={{ position: "relative", width: "37px", height: "37px" }}>
      <HandleIcon
        style={{
          position: "absolute",
          width: "30%",
          height: "10%",
          left: "18%",
          top: 0,
        }}
      />
      <RodesIcon
        style={{
          position: "absolute",
          width: "60%",
          height: "20%",
          left: "2.3%",
          top: 2,
        }}
      />
      <BucketIcon
        style={{
          width: "65%",
          height: "auto",
          position: "absolute",
          top: 10,
          left: 0,
        }}
      />
    </Box>
  );
}

export default EcommerceIcons;
