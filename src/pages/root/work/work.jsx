import React from "react";
import style from "./work.module.css";

export const Work = () => {
  return (
    <div className={style.work_div_1}>
      <div
        style={{
          width: "80vw",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1
          style={{
            fontWeight: "bold",
            fontSize: "55px",
            width: "50vw",
            textAlign: "center",
            color: "#000",
            
          }}
        >
          Mastery in Construction Craftsmanship
        </h1>
      </div>
      <div className={style.grid}>
        <figure className={style.effect_oscar}>
          <img
            src="https://tympanus.net/Development/HoverEffectIdeas/img/9.jpg"
            alt="img09"
          />
          <figcaption>
            <h2>
              01. <span>Plots</span>
            </h2>
            <p>
              A meticulously crafted plotted development offering unparalleled
              living experiences.
            </p>
          </figcaption>
        </figure>
        <figure className={style.effect_oscar}>
          <img
            src="https://tympanus.net/Development/HoverEffectIdeas/img/10.jpg"
            alt="img10"
          />
          <figcaption>
            <h2>
              02.{" "}
              <span>
                Dream <span>House</span>
              </span>
            </h2>
            <p>
              Transforming dreams into reality through expert house construction
              services.
            </p>
          </figcaption>
        </figure>
        <figure className={style.effect_oscar}>
          <img
            src="https://tympanus.net/Development/HoverEffectIdeas/img/9.jpg"
            alt="img09"
          />
          <figcaption>
            <h2>
              03.{" "}
              <span>
                Farm <span>House</span>
              </span>
            </h2>
            <p>
              Escape to tranquility with our exquisite farmhouses, blending
              luxury and nature seamlessly.
            </p>
            <a href="#">View more</a>
          </figcaption>
        </figure>
        <figure className={style.effect_oscar}>
          <img
            src="https://tympanus.net/Development/HoverEffectIdeas/img/10.jpg"
            alt="img10"
          />
          <figcaption>
            <h2>
              04.
              <span>
                Mandate <span>Projects</span>
              </span>
            </h2>
            <p>
              Embarking on a mandate project, where vision meets execution to
              redefine standards.
            </p>
            <a href="#">View more</a>
          </figcaption>
        </figure>
        <figure className={style.effect_oscar}>
          <img
            src="https://tympanus.net/Development/HoverEffectIdeas/img/9.jpg"
            alt="img09"
          />
          <figcaption>
            <h2>
              05. <span>Complex</span>
            </h2>
            <p>
              Pioneering complex construction projects, shaping skylines and
              communities with innovation and precision.
            </p>
            <a href="#">View more</a>
          </figcaption>
        </figure>
        <figure className={style.effect_oscar}>
          <img
            src="https://tympanus.net/Development/HoverEffectIdeas/img/10.jpg"
            alt="img10"
          />
          <figcaption>
            <h2>
              06. <span>&nbsp;Interiors</span>
            </h2>
            <p>
              Elevating spaces with inspired interior design, merging
              functionality and aesthetics seamlessly.
            </p>
            <a href="#">View more</a>
          </figcaption>
        </figure>
      </div>
    </div>
  );
}
