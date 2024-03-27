
import React from "react";
import "./card.css";

export default function Cards() {
  return (
    <div className="cardContainer">
      <div className="card_about">
        <img
          src="https://i.ibb.co/XyYFtSs/5856548-building-buildings-cities-city-construction-icon.png"
          alt=""
          height={100}
          width={100}
        />
        <h1 className="header_name_card">CONSTRUCTIONS</h1>
        <span className="card_one_para">
          From residential sanctuaries to commercial landmarks, Vesara
          Construction delivers excellence in every project, guaranteed.
        </span>
      </div>
      <div className="card_about">
        <img
          src="https://i.ibb.co/ctnDkty/4944912-candelabra-chandelier-contemporary-interior-interiors-icon-1.png"
          alt=""
          height={100}
          width={100}
        />
        <h1 className="header_name_card">INTERIORS</h1>
        <span className="card_one_para">
          A smart choice for designers, carpenters, and end-users alike,
          offering unbeatable value without compromising on quality.
        </span>
      </div>
      <div className="card_about">
        <img
          src="https://cdn0.iconfinder.com/data/icons/realestate-7/512/value-realestate-business-integrity-statement-128.png"
          alt=""
          height={100}
          width={100}
        />
        <h1 className="header_name_card">REAL ESTATE</h1>
        <span className="card_one_para">
          An economical, high-quality solution catering to the needs of
          Designers, Carpenters, and End-users alike – a cost-saving gem
          offering exceptional value and craftsmanship
        </span>
      </div>
    </div>
  );
}




























