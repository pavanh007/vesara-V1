
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
        <h1>CONSTRUCTIONS</h1>
        <span style={{ color: "black" }}>
          From residential sanctuaries to commercial landmarks, Vesara
          Construction delivers excellence in every project, guaranteed.
        </span>
        <a class="swipe">
          KNOW MORE
          <span class="container">
            <svg
              height="24"
              width="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                fill="currentColor"
              ></path>
            </svg>
          </span>{" "}
        </a>
      </div>
      <div className="card_about">
        <img
          src="https://i.ibb.co/ctnDkty/4944912-candelabra-chandelier-contemporary-interior-interiors-icon-1.png"
          alt=""
          height={100}
          width={100}
        />
        <h1>CONSTRUCTIONS</h1>
        <span style={{ color: "black" }}>
          A smart choice for designers, carpenters, and end-users alike,
          offering unbeatable value without compromising on quality.
        </span>
        <a class="swipe">
          KNOW MORE
          <span class="container">
            <svg
              height="24"
              width="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                fill="currentColor"
              ></path>
            </svg>
          </span>{" "}
        </a>
      </div>
    </div>
  );
}




























