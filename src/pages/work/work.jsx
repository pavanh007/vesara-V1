import React from "react";
import "./work.css";

export default function Work() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        // backgroundColor: "bisque",
        width: "100vw",
        height: "130vw",
        top: "100px",
      }}
    >
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
          Mastery in Construction Craftsmanship
        </h1>
      </div>
      <div
        style={{
          textAlign: "center",
          width: "73vw",
          height: "100vh",
          margin: "50px",
          padding: "10px",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        <div className="card">
          <img
            src="https://images.unsplash.com/photo-1425342605259-25d80e320565?auto=format&fit=crop&w=750&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"
            alt="Road"
          />
          <div className="info">
            <h1>Road</h1>
            <p>
              Lorem Ipsum is simply dummy text from the printing and typeseting
              industry
            </p>
            <button>Read More</button>
          </div>
        </div>
        <div className="card">
          <img
            src="https://images.unsplash.com/photo-1425342605259-25d80e320565?auto=format&fit=crop&w=750&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"
            alt="Road"
          />
          <div className="info">
            <h1>Road</h1>
            <p>
              Lorem Ipsum is simply dummy text from the printing and typeseting
              industry
            </p>
            <button>Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
}
