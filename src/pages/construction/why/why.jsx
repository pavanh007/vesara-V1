import React from "react";
import style from "./why.module.css";

export const WhyVesara = () => {
  return (
    <>
      <div className={style.team_outer_layer}>
        <div className={style.team_layer_2}>
          <h1 className={style.team_header}>Why Vesara Construction</h1>
          <h4 className={style.team_header_2}>
            Empowering Rural and Urban Progress, Spearheading Economic Growth by
            Creating Timeless Structures. From our humble beginnings as a
            construction company in Bangalore, we've risen to become the premier
            choice in house construction services in the region.
          </h4>
        </div>
        <div className={style.container_outer_about}>
          <div className={style.container_box_about}>
            <h1 className={style.about_numbers}>110+</h1>
            <span className={style.box_names}>Dream Homes</span>
          </div>
          <div className={style.container_box_about}>
            <h1 className={style.about_numbers}>200+</h1>
            <span className={style.box_names}>Interior</span>
          </div>
          <div className={style.container_box_about}>
            <h1 className={style.about_numbers}>200+</h1>
            <span className={style.box_names}>Employees</span>
          </div>
          <div className={style.container_box_about}>
            <h1 className={style.about_numbers}>4.9+</h1>
            <span className={style.box_names}>Google Rating</span>
          </div>
        </div>
      </div>
    </>
  );
};
