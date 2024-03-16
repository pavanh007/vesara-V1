import React from "react";
import "./navbar.css"

export default function Navbar() {
  return (
    <div
      style={{
        position: "fixed",
        alignSelf: "center",
        height: "60px",
        zIndex: 2,
        width: "100vw",
        backgroundColor: "rgb(0, 0, 0, 0.2)",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          width: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1 style={{ color: "black" }}>{/* <logo /> */}LOGO</h1>
      </div>
      <div style={{ width: "30%" }}>
        <ul
          style={{
            display: "flex",
            flexDirection: "row",
            color: "white",
            justifyContent: "space-around",
          }}
        >
          <button className="nav_button">
            <span className="nav_item">home</span>
          </button>
          <button className="nav_button">
            <span className="nav_item">about</span>
          </button>

          <button className="nav_button">
            <span className="nav_item">project</span>
          </button>
          <button className="nav_button">
            <span className="nav_item">blog</span>
          </button>
        </ul>
      </div>
      <div style={{width: "10%"}}>
        <button class="btn-donate">
          <span className="nav_item">Contact Us</span>
        </button>
      </div>
    </div>
  );
}
