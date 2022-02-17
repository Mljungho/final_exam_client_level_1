import React from "react";
import { styled, CardMedia } from "@mui/material";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%"
});

const NavigationBar = () => {
  return (
    <>
      <CardMedia
        component="img"
        height="194"
        image="https://kundservice.viaplay.se/wp-content/themes/viaplaycs/assets/dist/images/viaplay_white.svg"
      />
    </>
  );
};

export default NavigationBar;
