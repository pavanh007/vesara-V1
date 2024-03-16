import React from "react";
import Navbar from "../../components/Navbar/navbar";
import "./Home.css"

export default function Home() {
  return (
    <>
      <Navbar />
      <div>
        <div class="main-content">
          <h1 class="main-heading">
            Where Quality Meets Precision, Every Brick Tells a Story.
          </h1>
          <p style={{ marginTop: "-50px" }}>
            <cite>&ndash;&ndash;&ndash; vesara group</cite>
          </p>
        </div>
      </div>
    </>
  );
}