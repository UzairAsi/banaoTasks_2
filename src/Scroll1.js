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
        <h1 className="headingbelow1">ABC 456</h1>
        <h3 className="headingbelow21">We are the</h3>
        <h3 className="headingbelow2">best web development</h3>
        <h3 className="headingbelow2">company in the world</h3>
        <h3 className="headingbelow3">View Case Study ----- </h3>
        <a href="/">S K I P</a>
      </div>
      <div className="app_image">
        <img className="dominoMobile1" src={domini} alt="..." />
        <img className="dominoMobile2" src={uxStrategy} alt="..." />
        <img className="dominoBread1" src={dominoBread} alt="..." />
        <img className="dominoBread2" src={dominoBread1} alt="..." />
        <img className="pizza" src={pizzaBox} alt="..." />
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
            <Tween
              from={{
                svgDraw: 0.14,
              }}
              to={{
                svgDraw: 0.28,
              }}
            >
              <circle
                r="137"
                cx="98"
                cy="115"
                stroke="white"
                strokeWidth="5"
                fill="transparent"
              />
            </Tween>
          </svg>
        </ScrollTrigger>
      </div>
    </div>
  );
}

export default Scroll1;
