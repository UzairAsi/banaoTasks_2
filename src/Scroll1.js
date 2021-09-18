import "./Scroll.css";
import { gsap } from "gsap";
import domini from "./domi-img1.png";
import dominoBread from "./dominos-bread.png";
import dominoBread1 from "./dominos-bread1.png";
import pizzaBox from "./pizza_box.png";
import uxStrategy from "./ux-strategy-for-mobile-app-devlopment.png";
import { ScrollTrigger } from "react-gsap";
import { Controls, PlayState, Tween } from "react-gsap";
function Scroll1() {
  return (
    <div className="app">
      <div className="app_text">
        <h4 className="headings1">Redefining</h4>
        <h1 className="headings2">UX Strategy</h1>
        <h4 className="headings3">and UI design</h4>
        <h1 className="headingbelow1 box bounce-3">ABC 456</h1>
        <h3 className="headingbelow21 box bounce-3">We are the</h3>
        <h3 className="headingbelow2 box bounce-3">best web development</h3>
        <h3 className="headingbelow2 box bounce-3">company in the world</h3>
        <h3 className="headingbelow3 box bounce-3">View Case Study ----- </h3>
        <a href="/">S K I P</a>
      </div>
      <div className="app_image">
        <img className="dominoMobile1 box bounce-3" src={domini} alt="..." />
        <img
          className="dominoMobile2 box bounce-3"
          src={uxStrategy}
          alt="..."
        />
        <img
          className="dominoBread1 box bounce-3"
          src={dominoBread}
          alt="..."
        />
        <img
          className="dominoBread2 box bounce-3"
          src={dominoBread1}
          alt="..."
        />
        <img className="pizza box bounce-3" src={pizzaBox} alt="..." />
      </div>
      <div className="app_circle">
        <ScrollTrigger start="-10px top" end="-5px center" scrub={0.5}>
          <svg
            width="400"
            height="300"
            viewBox="0 0 500 300"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              zIndex: "20",
              position: "absolute",
              display: "flex",
              top: "0%",
              left: "0%",
            }}
          >
            <circle
              fill="white"
              className="ball ball01"
              r="9"
              cx="220"
              cy="180"
            ></circle>
            <circle
              fill="white"
              className="ball ball01"
              r="9"
              cx="222"
              cy="60"
            ></circle>
            <circle
              fill="white"
              className="ball ball01"
              r="9"
              cx="8"
              cy="215"
            ></circle>
            <circle
              fill="#1276b1"
              className="ball ball01"
              r="9"
              cx="7"
              cy="16"
            ></circle>
            <Tween
              from={{
                svgDraw: 1,
              }}
              to={{
                svgDraw: 1,
                fill: "#1276b1",
              }}
            >
              <circle
                fill="white"
                className="ball ball01"
                r="9"
                cx="105"
                cy="-20"
              ></circle>
            </Tween>
            <circle
              fill="white"
              className="ball ball01"
              r="9"
              cx="115"
              cy="250"
            ></circle>
            <Tween
              from={{
                svgDraw: 1,
              }}
              to={{
                svgDraw: 1,
              }}
            >
              <circle
                r="137"
                cx="98"
                cy="115"
                stroke="white"
                strokeWidth="3"
                fill="transparent"
              />
            </Tween>
            <Tween
              from={{
                svgDraw: 0,
              }}
              to={{
                svgDraw: 1,
                stroke: "#1276b1",
              }}
            >
              <path
                d="M -29 63 A 134 141 0 0 1 112 -20"
                fill="none"
                stroke="lightblue"
                strokeWidth="2"
              />
            </Tween>
          </svg>
        </ScrollTrigger>
      </div>
    </div>
  );
}

export default Scroll1;
