import React from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Services from "./components/services_compo/Services";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Services />
    </div>
  );
};

export default App;
