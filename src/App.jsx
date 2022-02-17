import React from "react";
import MainProgramFeed from "./Components/MainProgramFeed";
import NavigationBar from "./Components/NavigationBar";

const App = () => {
  return (
    <React.Fragment>
      <NavigationBar />
      <MainProgramFeed />
    </React.Fragment>
  );
};

export default App;
