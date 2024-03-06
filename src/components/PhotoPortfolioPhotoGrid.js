export function PhotoPortfolioPhotoGrid({animationPlaying, photoList}){
  return (
    <ul className={`photoPortfolio__list-items  ${animationPlaying ? "appearance" : "disappearance"}`}>
      {photoList.map(photo => {
        return (
          <li className={`photoPortfolio__list-item`}>
            <img className="photoPortfolio__item-photo" src={photo.link} alt="фото" />
          </li>
        )
      })}
    </ul>
  )
}