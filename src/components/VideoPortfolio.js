import { useEffect, useState } from "react";
import { useWindowSize } from "../hooks/useWindowSize";
import { constants } from "../utils/constants";

export function VideoPortfolio() {
  const windowSize = useWindowSize();

  const [videoWindowWidth, setVideoWindowWidth] = useState(
    getVideoWidth(windowSize)
  );
  const [videoWindowHeight, setVideoWindowHeight] = useState(
    getVideoHeight(windowSize)
  );

  useEffect(() => {
    setVideoWindowWidth(getVideoWidth(windowSize));
    setVideoWindowHeight(getVideoHeight(windowSize));
  }, [windowSize]);

  function getVideoWidth(currentWidth) {
    if (currentWidth < 1230) {
      if (currentWidth < 1000) {
        if (currentWidth < 600) {
          return "280"
        }
        return "450";
      }
      return "400";
    }
    return "500";
  }

  function getVideoHeight(currentWidth) {
    if (currentWidth < 1230) {
      if (currentWidth < 1000) {
        if (currentWidth < 600) {
          return "157"
        }
        return "252";
      }
      return "224";
    }
    return "280";
  }

  return (
    <section id="portfolioVideo" className="videoPortfolio">
      <div className="videoPortfolio__title-cell">
        <h2 className="section-title">
          {constants.videoPortfolio.sectionTitle}
        </h2>
        <h3 className="section-subtitle">
          {constants.videoPortfolio.sectionSubtitle}
        </h3>
      </div>
      <a
        className="videoPortfolio__link"
        href={constants.videoPortfolio.linkOnMyYouTube}
        target="blank"
      >
        {constants.videoPortfolio.textOnYouTubeLink}
      </a>
      <div className="videoPortfolio__container">
        <iframe
          style={{
            boxShadow: "0 0 15px #8643DC",
            display: "inline-block",
            margin: "auto",
          }}
          width={videoWindowWidth}
          height={videoWindowHeight}
          src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=5dIOMcCyBoSwaMRo"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          loading="lazy"
          allowFullScreen
        ></iframe>
        <iframe
          style={{
            boxShadow: "0 0 15px #8643DC",
            display: "inline-block",
            margin: "auto",
          }}
          width={videoWindowWidth}
          height={videoWindowHeight}
          src="https://www.youtube.com/embed/hvL1339luv0?si=0cZVONUsmdgS-iub"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          loading="lazy"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}
