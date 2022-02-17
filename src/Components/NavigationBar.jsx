import React from "react";
import { styled, CardMedia, Box, AppBar } from "@mui/material";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "25%",
  maxHeight: "25%"
});

const NavigationBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        style={{
          background: "#7a1e77",
          marginBottom: "20px"
        }}
      >
        <CardMedia
          cy-data="image-header"
          component="img"
          height="194"
          image="https://kundservice.viaplay.se/wp-content/themes/viaplaycs/assets/dist/images/viaplay_white.svg"
        />
      </AppBar>
    </Box>
  );
};

export default NavigationBar;
