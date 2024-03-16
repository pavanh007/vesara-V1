import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./testimonial.css";
import { EffectCoverflow, Pagination } from "swiper/modules";

export default function Testimonial() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          height: "100vh",
          width: "100vw",
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
            Words of Trust: What Our Clients Say About Us
          </h1>
          <section
            style={{
              width: "70vw",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2,
                slideShadows: true,
              }}
              loop={true}
              modules={[EffectCoverflow, Pagination]}
              className="mySwiper"
            >
            
              <SwiperSlide>
                <div className="testimonialBox">
                  <img
                    src="https://i.ibb.co/vvNw1L0/8679071-double-quotes-r-icon.png"
                    className="quote"
                  />
                  <div className="content">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Reprehenderit repudiandae nisi reiciendis rerum similique
                      quibusdam, voluptates debitis, id nam perferendis fugit
                      corrupti. Maxime ratione minima dolore id corporis nemo
                      assumenda!
                    </p>
                    <div className="details">
                      <div className="imgBox">
                        <img src="" alt="" />
                      </div>
                      <h3>Random Person</h3>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="testimonialBox">
                  <img
                    src="https://i.ibb.co/vvNw1L0/8679071-double-quotes-r-icon.png"
                    className="quote"
                  />
                  <div className="content">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Reprehenderit repudiandae nisi reiciendis rerum similique
                      quibusdam, voluptates debitis, id nam perferendis fugit
                      corrupti. Maxime ratione minima dolore id corporis nemo
                      assumenda!
                    </p>
                    <div className="details">
                      <div className="imgBox">
                        <img src="" alt="" />
                      </div>
                      <h3>Random Person</h3>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="testimonialBox">
                  <img
                    src="https://i.ibb.co/vvNw1L0/8679071-double-quotes-r-icon.png"
                    className="quote"
                  />
                  <div className="content">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Reprehenderit repudiandae nisi reiciendis rerum similique
                      quibusdam, voluptates debitis, id nam perferendis fugit
                      corrupti. Maxime ratione minima dolore id corporis nemo
                      assumenda!
                    </p>
                    <div className="details">
                      <div className="imgBox">
                        <img src="" alt="" />
                      </div>
                      <h3>Random Person</h3>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="testimonialBox">
                  <img
                    src="https://i.ibb.co/vvNw1L0/8679071-double-quotes-r-icon.png"
                    className="quote"
                  />
                  <div className="content">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Reprehenderit repudiandae nisi reiciendis rerum similique
                      quibusdam, voluptates debitis, id nam perferendis fugit
                      corrupti. Maxime ratione minima dolore id corporis nemo
                      assumenda!
                    </p>
                    <div className="details">
                      <div className="imgBox">
                        <img src="" alt="" />
                      </div>
                      <h3>Random Person</h3>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="testimonialBox">
                  <img
                    src="https://i.ibb.co/vvNw1L0/8679071-double-quotes-r-icon.png"
                    className="quote"
                  />
                  <div className="content">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Reprehenderit repudiandae nisi reiciendis rerum similique
                      quibusdam, voluptates debitis, id nam perferendis fugit
                      corrupti. Maxime ratione minima dolore id corporis nemo
                      assumenda!
                    </p>
                    <div className="details">
                      <div className="imgBox">
                        <img src="" alt="" />
                      </div>
                      <h3>Random Person</h3>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </section>
        </div>
      </div>
    );
}