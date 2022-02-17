import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import ProgramCard from "./ProgramCard";
import Programs from "../modules/Programs";

const MainProgramFeed = () => {
  const [programs, setPrograms] = useState([]);

  const fetchPrograms = async () => {
    const response = await Programs.index();
  };

  useEffect(() => {
    fetchPrograms();
  }, []);

  const collectionOfPrograms = programs.map((program) => {
    return (
      <Grid item key={program.id} md={6}>
        <ProgramCard program={program} />
      </Grid>
    );
  });
  return <div></div>;
};

export default MainProgramFeed;
