import { useEffect, useState } from "react";
import { constants } from "../utils/constants";
import { PhotoPortfolioNavButton } from "./PhotoPortfolioNavButton";
import { PhotoPortfolioPhotoGrid } from "./PhotoPortfolioPhotoGrid";

export function PhotoPortfolio({ activeColumn, activateColumn }) {
  const [photoList, setPhotoList] = useState(
    constants.photoPortfolio.photos.land
  );
  const [animationPlaying, setAnimationPlaying] = useState(true);

  useEffect(() => {
    setAnimationPlaying(false);
    setTimeout(() => {
      if (activeColumn === 1) {
        setPhotoList(constants.photoPortfolio.photos.land);
      } else if (activeColumn === 2) {
        setPhotoList(constants.photoPortfolio.photos.dacha);
      } else {
        setPhotoList(constants.photoPortfolio.photos.sosedi);
      }
      setAnimationPlaying(true);
    }, 250);
  }, [activeColumn]);

  return (
    <section id="portfolioPhoto" className="photoPortfolio">
      <h2 className="section-title">{constants.photoPortfolio.sectionTitle}</h2>
      <h3 className="section-subtitle">
        {constants.photoPortfolio.sectionSubtitle}
      </h3>
      <nav className="photoPortfolio__menu">
        <PhotoPortfolioNavButton
          title={constants.photoPortfolio.firstColumnTitle}
          activeColumn={activeColumn}
          activateColumn={activateColumn}
          columnNumber={1}
        />
        <PhotoPortfolioNavButton
          title={constants.photoPortfolio.secondColumnTitle}
          activeColumn={activeColumn}
          activateColumn={activateColumn}
          columnNumber={2}
        />
        <PhotoPortfolioNavButton
          title={constants.photoPortfolio.thirdColumnTitle}
          activeColumn={activeColumn}
          activateColumn={activateColumn}
          columnNumber={3}
        />
      </nav>
      <PhotoPortfolioPhotoGrid
        animationPlaying={animationPlaying}
        photoList={photoList}
      />
    </section>
  );
}
