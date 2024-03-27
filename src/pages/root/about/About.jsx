import React from "react";
import Cards from "../home/Card/Card";
import style from "./about.module.css";

export const About = () => {
  return (
    <div className={style.about_container_1}>
      {/* <h1 className={style.about_header}>
        We are Working On!
      </h1> */}
      <div className={style.number_background}>
        <div className={style.about_container_2}>
          <h1 className={style.about_header}>
            Discover the Essence of Vesara: Our Story, Values, and Vision
          </h1>
          <p className={style.about_paragraph}>
            At Vesara Constructions, we excel in our distinctive custom build
            program, meticulously tailored to transform your vision into reality
            with unparalleled precision and excellence. Our comprehensive
            approach encompasses every stage of the construction journey, from
            conceptualization to realization. With a seamless integration of
            architectural ingenuity and design finesse, we ensure that every
            aspect of your project reflects your unique style and preferences.
          </p>
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
          <div className={style.container_box_about}>
            <h1 className={style.about_numbers}>20+</h1>
            <span className={style.box_names}>Experience</span>
          </div>
          <div className={style.container_box_about}>
            <h1 className={style.about_numbers}>100+</h1>
            <span className={style.box_names}>Dream Homes</span>
          </div>
        </div>
      </div>
    </div>
  );
}
