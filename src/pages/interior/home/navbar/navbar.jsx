import React, { useState, useEffect } from "react";
import style from "./navbar.module.css";

export default function Navbar() {
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
      const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        const visible = prevScrollPos > currentScrollPos;

        setPrevScrollPos(currentScrollPos);
        setVisible(visible);
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, [prevScrollPos]);

  return (
    <div
      className={`${style.navbar_outer_layer} ${visible ? "" : style.hidden}`}
    >
      <div
        style={{
          width: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1 style={{ color: "black" }}>LOGO</h1>
      </div>
      <div style={{ width: "30%" }}>
        <ul
          style={{
            display: "flex",
            flexDirection: "row",
            color: "white",
            justifyContent: "space-around",
          }}
        >
          <button className={style.nav_button}>
            <span className={style.nav_item}>home</span>
          </button>
          <button className={style.nav_button}>
            <span className={style.nav_item}>about</span>
          </button>

          <button className={style.nav_button}>
            <span className={style.nav_item}>project</span>
          </button>
          <button className={style.nav_button}>
            <span className={style.nav_item}>blog</span>
          </button>
        </ul>
      </div>
      <div style={{ width: "10%" }}>
        <button class={style.btn_donate}>
          <span className={style.nav_item}>Contact Us</span>
        </button>
      </div>
    </div>
  );
}
