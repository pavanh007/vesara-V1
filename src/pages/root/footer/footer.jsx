import React from "react";
import style from "./footer.module.css";

export const Footer = () => {
  return (
    <div className={style.footer_style}>

      <div className={style.footer_header}>
        <h1 className={style.footer_line}>
          Embark on Your Dream Project Journey with Us Today!
        </h1>
      </div>
      <div className={style.footer_content}>
        <div>
          <img
            src="https://i.ibb.co/vvNw1L0/8679071-double-quotes-r-icon.png"
            height={200}
            width={200}
            className={style.footer_logo}
          />
        </div>
        <div className={style.quick_links}>
          <h4 className={style.footer_header_title}>Quick Links</h4>
          <ul className={style.context_list}>
            <li className={style.text_decoration}>
              <i className="fas fa-book"></i> Blogs
            </li>
            <li className={style.text_decoration}>
              <i className="fas fa-images"></i> Gallery
            </li>
            <li className={style.text_decoration}>
              <i className="fas fa-tasks"></i> Projects
            </li>
          </ul>
        </div>
        <div>
          <h4 className={style.footer_header_title}>Contact Us</h4>
          <ul className={style.context_list}>
            <li className={style.text_decoration}>
              <i className="fas fa-phone"></i> +919123121912
            </li>
            <li className={style.text_decoration}>
              <i className="fas fa-envelope"></i> testing@gmail.com
            </li>
          </ul>
        </div>
        <div>
          <h4 className={style.footer_header_title}>Location</h4>
          <ul className={style.context_list}>
            <li className={style.address}>
              <i className="fas fa-map-marker-alt"></i> 3rd Floor, Vishal
              Towers, 764/1A, Garden Layout, Sector 2, HSR Layout, Bengaluru,
              Karnataka 560102
            </li>
          </ul>
        </div>
        <div>
          <h4 className={style.footer_header_title}>Follow Us</h4>
          <ul className={style.context_list}>
            <li className={style.text_decoration}>
              <i className="fab fa-facebook"></i> Facebook
            </li>
            <li className={style.text_decoration}>
              <i className="fab fa-instagram"></i> Instagram
            </li>
            <li className={style.text_decoration}>
              <i className="fab fa-pinterest"></i> Pinterest
            </li>
            <li className={style.text_decoration}>
              <i className="fab fa-linkedin"></i> LinkedIn
            </li>
          </ul>
        </div>
      </div>
      <footer className={style.copy_right}>
        <span>Copyright © 2024 Vesara Group</span>
      </footer>
    </div>
  );
};

