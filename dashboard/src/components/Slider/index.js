import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import img1 from "../../assets/2020_başvuru_duyuru@2x.png";
import "@splidejs/splide/dist/css/splide.min.css";
import "./index.scss";
export default function Slider() {
  return (
    <Splide>
      <SplideSlide>
        <img src={img1} alt="slide 1" className="w-full" />
      </SplideSlide>
      <SplideSlide>
        <img
          src="https://picsum.photos/770/387"
          alt="slide 2"
          className="w-full"
        />
      </SplideSlide>
    </Splide>
  );
}
