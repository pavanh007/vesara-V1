import React from "react";
import Navbar from "./navbar/navbar";
import style from "./constructHome.module.css";
import Cards from "./Card/Card";


export const ConstructHome = () => {
  return (
    <>
      <Navbar />
      <div>
        <div class={style.main_content}>
          <h1 class={style.main_heading}>
            Crafting High-Quality Homes at Affordable Prices
          </h1>
          <p style={{ marginTop: "-50px" }}>
            <cite>&ndash;&ndash;&ndash; vesara group</cite>
          </p>
          <Cards />
        </div>
      </div>
    </>
  );
};
