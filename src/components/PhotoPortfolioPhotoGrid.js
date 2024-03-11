export function PhotoPortfolioPhotoGrid({animationPlaying, photoList, togglePopup}){
  return (
    <ul className={`photoPortfolio__list-items  ${animationPlaying ? "appearance" : "disappearance"}`}>
      {photoList.map(photo => {
        return (
          <li key={photo.id} className={`photoPortfolio__list-item`}>
            <img className="photoPortfolio__item-photo" onClick={() => togglePopup(photo.id)} src={photo.link} alt="фото" />
          </li>
        )
      })}
    </ul>
  )
}