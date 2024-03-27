import React from "react";
import style from "./cost.module.css";

export const ConstructionCost = () => {
  return (
    <>
      <div className={style.team_outer_layer}>
        <div className={style.team_layer_2}>
          <h1 className={style.team_header}>House Construction Packages</h1>
          <h4 className={style.team_header_2}>
            Discover Our Craftsmanship: Unveiling the Art of Building Our Homes
          </h4>
        </div>
        <div className={style.container_outer_about}>
          <div className={style.container_box_about}>
            <img
              src="https://cdn4.iconfinder.com/data/icons/wedding-element-1/64/Hotel-mansion-luxury-city-architecture-128.png"
              alt=""
              height={120}
              width={120}
            />
            <h1 className={style.about_numbers}>GOLD</h1>
            <span className={style.box_names}>₹ 1750/sq.ft (Incl.GST)</span>
          </div>
          <div className={style.container_box_about}>
            <img
              src="https://cdn2.iconfinder.com/data/icons/emergencies-3/64/Fire-station-brigade-building-mansion-128.png"
              height={120}
              width={120}
            />
            <h1 className={style.about_numbers}>DIAMOND</h1>
            <span className={style.box_names}>₹1990/sq.ft (Incl.GST)</span>
          </div>
          <div className={style.container_box_about}>
            <img
              src="https://cdn1.iconfinder.com/data/icons/city-element-35/62/Hostel-tourist-traveler-hotel-mansion-128.png"
              alt=""
              height={120}
              width={120}
            />
            <h1 className={style.about_numbers}>PLATINIUM</h1>
            <span className={style.box_names}>₹2350/sq.ft (Incl.GST)</span>
          </div>
          <div className={style.container_box_about}>
            <img
              src="https://cdn4.iconfinder.com/data/icons/architecture-19/64/Architecture-building-construction-precedent-hotel-128.png"
              alt=""
              height={120}
              width={120}
            />
            <h1 className={style.about_numbers}>TITANIUM</h1>
            <span className={style.box_names}>₹3200/Sq.ft (Incl.GST)</span>
          </div>
        </div>
      </div>
    </>
  );
};
