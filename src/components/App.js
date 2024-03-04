import { Route, Routes } from "react-router-dom";
import { Header } from "./Header";
import { Main } from "./Main";
import { Footer } from "./Footer";

function App() {
  return (
    <div className="page">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Main />
              <Footer />
            </>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
