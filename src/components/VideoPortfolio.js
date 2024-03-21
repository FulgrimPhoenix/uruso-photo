import { useEffect, useState } from "react";
import { useWindowSize } from "../hooks/useWindowSize";
import { constants } from "../utils/constants";
import leftVideo from "../images/videoPreview/left.png";
import rightVideo from "../images/videoPreview/right.png";
import { useInView } from "react-intersection-observer";

export function VideoPortfolio() {
  const windowSize = useWindowSize();
  const [isLeftVideoActive, setIsLeftVideoActive] = useState(false);
  const [isRightVideoActive, setIsRightVideoActive] = useState(false);
  const [videoWindowWidth, setVideoWindowWidth] = useState(
    getVideoWidth(windowSize)
  );
  const [videoWindowHeight, setVideoWindowHeight] = useState(
    getVideoHeight(windowSize)
  );
  const { ref, inView, entry } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    setVideoWindowWidth(getVideoWidth(windowSize));
    setVideoWindowHeight(getVideoHeight(windowSize));
  }, [windowSize]);

  function getVideoWidth(currentWidth) {
    if (currentWidth < 1230) {
      if (currentWidth < 1028) {
        if (currentWidth < 600) {
          return 280;
        }
        return 450;
      }
      return 400;
    }
    return 500;
  }

  function getVideoHeight(currentWidth) {
    if (currentWidth < 1230) {
      if (currentWidth < 1028) {
        if (currentWidth < 600) {
          return 157;
        }
        return 252;
      }
      return 224;
    }
    return 280;
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
      <div ref={ref} className={`videoPortfolio__container ${inView ? "videoPortfolio__container_visible" : ""}`}>
        {isLeftVideoActive ? (
          <iframe
            style={{
              boxShadow: "0 0 15px #8643DC",
              display: "inline-block",
              margin: "auto",
            }}
            width={videoWindowWidth}
            height={videoWindowHeight}
            src={constants.videoPortfolio.firstVideo}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            loading="lazy"
            allowFullScreen
          >
            Видео
          </iframe>
        ) : (
          <div
            style={{
              display: "block",
              margin: "auto",
              width: videoWindowWidth,
              height: videoWindowHeight,
              boxShadow: "0 0 15px #8643DC",
              cursor: "pointer",
            }}
          >
            <img
              style={{ width: "100%", height: "100%" }}
              src={leftVideo}
              alt="Видео из портфолио"
              onClick={() => setIsLeftVideoActive(true)}
            />
          </div>
        )}
        {isRightVideoActive ? (
          <iframe
            style={{
              boxShadow: "0 0 15px #8643DC",
              display: "inline-block",
              margin: "auto",
            }}
            width={videoWindowWidth}
            height={videoWindowHeight}
            src={constants.videoPortfolio.secondVideo}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            loading="lazy"
            allowFullScreen
          ></iframe>
        ) : (
          <div
            style={{
              display: "block",
              margin: "auto",
              width: videoWindowWidth,
              height: videoWindowHeight,
              boxShadow: "0 0 15px #8643DC",
              cursor: "pointer",
            }}
          >
            <img
              style={{ width: "100%", height: "100%" }}
              src={rightVideo}
              alt="Видео из портфолио"
              onClick={() => setIsRightVideoActive(true)}
            />
          </div>
        )}
      </div>
    </section>
  );
}
