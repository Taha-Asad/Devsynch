import React from "react";
import { Avatar as MUIAvatar, Box } from "@mui/material";

// Avatar wrapper
const Avatar = React.forwardRef(({ src, alt, fallback, sx, ...props }, ref) => (
  <MUIAvatar
    ref={ref}
    src={src}
    alt={alt}
    sx={{
      width: 40, // same as h-10
      height: 40, // same as w-10
      overflow: "hidden",
      borderRadius: "50%",
      zIndex: 0,
      ...sx,
    }}
    {...props}
  >
    {/* Fallback if no image */}
    {fallback || (alt ? alt[0] : "?")}
  </MUIAvatar>
));
Avatar.displayName = "Avatar";

// AvatarImage for custom image handling
const AvatarImage = React.forwardRef(({ style, ...props }, ref) => (
  <Box
    component="img"
    ref={ref}
    {...props}
    sx={{
      width: "100%",
      height: "100%",
      bgcolor: "#d9d9d9",
      objectFit: "cover", // crops like profile photo
      zIndex: 0,
      borderRadius: "50%",
      ...style,
    }}
  />
));
AvatarImage.displayName = "AvatarImage";

// AvatarFallback
const AvatarFallback = React.forwardRef(({ children, ...props }, ref) => (
  <Box
    ref={ref}
    sx={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      bgcolor: "grey.700",
      color: "white",
      fontSize: "14px",
      fontWeight: 500,
    }}
    {...props}
  >
    {children}
  </Box>
));
AvatarFallback.displayName = "AvatarFallback";

export { Avatar, AvatarImage, AvatarFallback };
