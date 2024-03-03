import { constants } from "../utils/constants";

export function VideoPortfolio() {
    return (
        <section id="portfolioVideo" className="videoPortfolio">
            <div className="videoPortfolio__title-cell">
                <h2 className="section-title">{constants.videoPortfolio.sectionTitle}</h2>
                <h3 className="section-subtitle">{constants.videoPortfolio.sectionSubtitle}</h3>
            </div>
            <a className="videoPortfolio__link" href={constants.videoPortfolio.linkOnMyYouTube} target="blank">{constants.videoPortfolio.textOnYouTubeLink}</a>
            <div className="videoPortfolio__container">
                <iframe style={{boxShadow: "0 0 15px #8643DC", display: "inline-block", margin: "auto"}} width="500" height="280" src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=5dIOMcCyBoSwaMRo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  allowFullScreen></iframe>
                <iframe style={{boxShadow: "0 0 15px #8643DC", display: "inline-block", margin: "auto"}} width="500" height="280" src="https://www.youtube.com/embed/hvL1339luv0?si=0cZVONUsmdgS-iub" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  allowFullScreen></iframe>
            </div>
        </section>
    )
}