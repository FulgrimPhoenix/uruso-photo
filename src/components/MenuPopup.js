import { constants } from "../utils/constants";

export function MenuPopup({children, closePopup}){
  return(
    <div className={`menu-popup appearance`}>
      <img className="menu-popup__exit-button" onClick={() => closePopup(false)} src={constants.header.menuExitButton} alt="Закрыть" />
      {children}
    </div>
  )
}