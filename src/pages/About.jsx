import React from "react";
import Cards from "../components/Card/Card";

export default function About() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        width: "100vw",
      }}
    >
      <Cards />
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
            fontSize: "35px",
            width: "50vw",
            textAlign: "center",
            textTransform: "uppercase",
          }}
        >
          Discover the Essence of Vesara: Our Story, Values, and Vision
        </h1>
        <p style={{ fontSize: "18px", textAlign: "center", width: "60vw" }}>
          At Vesara Constructions, we excel in our distinctive custom build
          program, meticulously tailored to transform your vision into reality
          with unparalleled precision and excellence. Our comprehensive approach
          encompasses every stage of the construction journey, from
          conceptualization to realization. With a seamless integration of
          architectural ingenuity and design finesse, we ensure that every
          aspect of your project reflects your unique style and preferences.
        </p>
        <p style={{ fontSize: "18px", textAlign: "center", width: "60vw" }}>
          Our seasoned team of experts possesses the skills and dedication
          necessary to guide you through each phase of the process, providing
          top-notch architectural and design services that are second to none.
          From initial sketches to final touches, we are committed to delivering
          results that exceed expectations.
        </p>
      </div>
      <div
        style={{
          textAlign: "center",
          width: "53vw",
          height: "350px",
          border: "1px solid black",
          margin: "50px",
          padding: "10px",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        <div
          style={{
            minHeight: "150px",
            minWidth: "350px",
            backgroundColor: "beige",
            margin: "5px",
          }}
        >
          <h1
            style={{
              color: "#000",
              textShadow: "0 13.36px 8.896px #c4b59d,0 -2px 1px #fff",
            }}
          >
            100+
          </h1>
          <span>Dream Homes</span>
        </div>
        <div
          style={{
            minHeight: "150px",
            width: "300px",
            backgroundColor: "beige",
            margin: "5px",
          }}
        >
          <h1
            style={{
              color: "#000",
              textShadow: "0 13.36px 8.896px #c4b59d,0 -2px 1px #fff",
            }}
          >
            100+
          </h1>
          <span>Dream Homes</span>
        </div>
        <div
          style={{
            minHeight: "150px",
            width: "200px",
            backgroundColor: "beige",
            margin: "5px",
          }}
        >
          <h1
            style={{
              color: "#000",
              textShadow: "0 13.36px 8.896px #c4b59d,0 -2px 1px #fff",
            }}
          >
            100+
          </h1>
          <span>Dream Homes</span>
        </div>
        <div
          style={{
            minHeight: "150px",
            width: "250px",
            backgroundColor: "beige",
            margin: "5px",
          }}
        >
          <h1
            style={{
              color: "#000",
              textShadow: "0 13.36px 8.896px #c4b59d,0 -2px 1px #fff",
            }}
          >
            100+
          </h1>
          <span>Dream Homes</span>
        </div>
        <div
          style={{
            minHeight: "150px",
            width: "250px",
            backgroundColor: "beige",
            margin: "5px",
          }}
        >
          <h1
            style={{
              color: "#000",
              textShadow: "0 13.36px 8.896px #c4b59d,0 -2px 1px #fff",
            }}
          >
            100+
          </h1>
          <span>Dream Homes</span>
        </div>
        <div
          style={{
            minHeight: "150px",
            minWidth: "350px",
            backgroundColor: "beige",
            margin: "5px",
          }}
        >
          <h1
            style={{
              color: "#000",
              textShadow: "0 13.36px 8.896px #c4b59d,0 -2px 1px #fff",
            }}
          >
            100+
          </h1>
          <span>Dream Homes</span>
        </div>
      </div>
    </div>
  );
}
