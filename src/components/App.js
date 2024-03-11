import { Route, Routes } from "react-router-dom";
import { Header } from "./Header";
import { Main } from "./Main";
import { Footer } from "./Footer";
import { PhotoPopup } from "./PhotoPopup";
import { useState } from "react";
import { constants } from "../utils/constants";

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [openedPhotoList, setOpenedPhotoList] = useState(
    constants.photoPortfolio.photos.land
  );
  const [activeSlide, setActiveSlide] = useState(0);

  function togglePopup(slideNumber) {
    setIsPopupOpen(!isPopupOpen);
    setActiveSlide(slideNumber);
  }
  
  function setCurrentPhotoList(list){
    setOpenedPhotoList(list);
  }

  return (
    <div className="page">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Main togglePopup={togglePopup} setCurrentPhotoList={setCurrentPhotoList} />
              <Footer />
              <PhotoPopup
                isPopupOpen={isPopupOpen}
                openedPhotoList={openedPhotoList}
                togglePopup={togglePopup}
                activeSlide={activeSlide}
              />
            </>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
