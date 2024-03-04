import { Outlet, Route, Routes } from "react-router-dom";
import { AboutMe } from "./AboutMe";
import { Intro } from "./Intro";
import { PhotoPortfolio } from "./PhotoPortfolio";
import { Services } from "./Services";
import { VideoPortfolio } from "./VideoPortfolio";
import { useState } from "react";
import { Testimonials } from "./Testimonials";

export function Main() {

  const [whichСolumnIsActive, setWhichСolumnIsActive] = useState(1);

  function switchActiveColumn(number){
    setWhichСolumnIsActive(number)
  }

  return (
    <main>
      <Intro />
      <Services />
      <AboutMe />
      <VideoPortfolio />
      <PhotoPortfolio activeColumn={whichСolumnIsActive} activateColumn={switchActiveColumn} />
      <Testimonials />
    </main>
  );
}
