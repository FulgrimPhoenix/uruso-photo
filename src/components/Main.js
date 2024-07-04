import { Outlet, Route, Routes } from "react-router-dom";
import { AboutMe } from "./AboutMe";
import { Intro } from "./Intro";
import { PhotoPortfolio } from "./PhotoPortfolio";
import { Services } from "./Services";
import { VideoPortfolio } from "./VideoPortfolio";
import { useState } from "react";
import { Testimonials } from "./Testimonials";
import { Cooperation } from "./Cooperation";
import { Feedback } from "./Feedback";

export function Main({ togglePopup, setCurrentPhotoList }) {
  const [whichСolumnIsActive, setWhichСolumnIsActive] = useState(1);

  function switchActiveColumn(number) {
    setWhichСolumnIsActive(number);
  }

  return (
    <main>
      <Intro />
      <Services />
      <AboutMe />
      <VideoPortfolio />
      <PhotoPortfolio
        setCurrentPhotoList={setCurrentPhotoList}
        activeColumn={whichСolumnIsActive}
        activateColumn={switchActiveColumn}
        togglePopup={togglePopup}
      />
      <Cooperation />
      <Testimonials />
      <Feedback />
    </main>
  );
}
