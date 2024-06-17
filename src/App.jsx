import React from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Services from "./components/services_compo/Services";
import Courses from "./components/courses/Courses";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Services />
      <Courses />
    </div>
  );
};

export default App;
