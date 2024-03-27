import React from "react";
import Navbar from "./navbar/navbar";
import style from "./home.module.css"
import Cards from "./Card/Card";

export const Home = () => {
  return (
    <>
      <Navbar />
      <div>
        <div class={style.main_content}>
          <h1 class={style.main_heading}>
            Where Quality Meets Precision, Every Brick Tells a Story.
          </h1>
          <p style={{ marginTop: "-50px" }}>
            <cite>&ndash;&ndash;&ndash; vesara group</cite>
          </p>
          <Cards />
        </div>
      </div>
    </>
  );
}