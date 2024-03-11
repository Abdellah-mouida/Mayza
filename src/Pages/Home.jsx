import { Outlet } from "react-router-dom";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";

export default function Home() {
  return (
    <div
      style={{
        position: "relative",

        backgroundColor: "var(--bk)",
      }}
    >
      <Nav></Nav>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}
