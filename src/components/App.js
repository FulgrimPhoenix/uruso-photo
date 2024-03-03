import { Route, Routes } from "react-router-dom";
import { Header } from "./Header";
import { Main } from "./Main";

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
            </>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
