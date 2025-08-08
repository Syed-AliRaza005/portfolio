import React from "react"
import Hero from "./components/hero";

import Info from "./components/info";
import Skills from "./components/skills";
import Project from "./components/project";

function Main(){
  return (
    <div className="bg-black w-screen h-auto ">
      <Hero/>
    <div className="bg-blue-950 w-screen h-1 "></div>
    <Info/>
    <Skills/>
    <Project/>

    </div>

    
  );
}

export default Main;