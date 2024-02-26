import "./App.css";
import Home from "./Home/Home";
import Loginstud from "./Login/Loginstud";
import Loginteach from "./Login/Loginteach";

import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/loginteach" element={<Loginteach />} />
          <Route exact path="/loginstud" element={<Loginstud />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
