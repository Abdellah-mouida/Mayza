import { Routes, Route } from "react-router-dom";
import Welcome from "./Pages/Welcome";
import Game from "./Pages/Game";
import Home from "./Pages/Home";
import About from "./Pages/About";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Home></Home>}>
          <Route element={<Welcome></Welcome>} path="/"></Route>{" "}
          <Route element={<Game></Game>} path="/game"></Route>
          <Route element={<About></About>} path="/about"></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
