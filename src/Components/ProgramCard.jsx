import React from "react";
import { Card, CardMedia } from "@mui/material";

const ProgramCard = (props) => {
  return (
    <Card>
      <CardMedia
        cy-data="program-feed"
        component="img"
        height="194"
        image={props.image}
      />
    </Card>
  );
};


export default ProgramCard;
