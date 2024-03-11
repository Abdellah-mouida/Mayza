import { Link, NavLink } from "react-router-dom";
import img from "../Images/OIP-removebg-preview__1_-removebg (1).png";
import { useRef, useState } from "react";
export default function Nav() {
  let [theme, setTheme] = useState(localStorage.getItem("Theme") || false);
  let ref = useRef(null);
  if (theme) {
    document.documentElement.style.setProperty("--bk", "#000");
    document.documentElement.style.setProperty("--font", "#fff");
    document.documentElement.style.setProperty("--game", "#ecec");
  } else {
    document.documentElement.style.setProperty("--bk", "#fff");
    document.documentElement.style.setProperty("--font", "#000");
    document.documentElement.style.setProperty("--game", "#111");
  }
  return (
    <>
      <style ref={ref}></style>
      <nav>
        <Link to={"/"} className="logo d-flex-c Link">
          <img src={img} alt="" />
          <h2>Mayza</h2>
        </Link>
        <div
          className="d-flex-c"
          style={{
            height: "100%",
          }}
        >
          <div
            onClick={() => {
              setTheme((p) => !p);
              localStorage.setItem("Theme", theme);
            }}
            className="nav-link"
            content="Light"
            style={{ display: theme ? "none" : "inline-block" }}
          >
            <i className="fas fa-sun"></i>
          </div>
          <div
            onClick={() => {
              setTheme((p) => !p);
              localStorage.setItem("Theme", theme);
            }}
            className="nav-link"
            content="Dark"
            style={{ display: theme ? "inline-block" : "none" }}
          >
            <i className="fas fa-moon"></i>
          </div>
          <NavLink content="Game" className="Link nav-link" to={"/game"}>
            {" "}
            <i className="fa-solid fa-gamepad"></i>
          </NavLink>
          <NavLink content="About" className="Link nav-link" to={"/about"}>
            {" "}
            <i className="fa-solid fa-info"></i>
          </NavLink>
        </div>
      </nav>
    </>
  );
}
