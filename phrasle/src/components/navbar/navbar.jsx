import React from "react";
import "./navbar.css";
import ShowModal from "../showmodal/showmodal";

function NavBar() {
  return (
    <div className="navbar">
      <div className="align">
        <h1>Phrasle</h1>
        <ShowModal/>
      </div>
    </div>
  );
}

export default NavBar;
