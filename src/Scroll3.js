import "./App.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "react-gsap";
import { Controls, PlayState, Tween } from "react-gsap";
import Mobileapp1 from "./world-communication-awards-for-best-digital-experience.png";
import Mobileimage1 from "./nexgtv-entertainment-mobile-app-development.png";
import Mobileimage2 from "./nexgtv-mobile-app-ui-design.png";
function Scroll3() {
  return (
    <div className="app">
      <div style={{ backgroundColor: "#6639d6" }} className="app_text">
        <h1
          style={{
            position: "absolute",
            zIndex: "1",
            top: "26.7%",
            left: "31.5%",
          }}
        >
          25M+ Downloads
        </h1>
        <h3
          style={{
            position: "absolute",
            zIndex: "1",
            top: "35.3%",
            left: "31.5%",
          }}
        >
          an appstore & google playstore
        </h3>
        <img
          style={{ position: "absolute", top: "45%", left: "5%" }}
          src={Mobileapp1}
          alt="..."
        />
        <h1 className="headingbelow1">ABC 123</h1>
        <h3 className="headingbelow21">We are the</h3>
        <h3 className="headingbelow2">best web development</h3>
        <h3 className="headingbelow2">company in the world</h3>
        <h3 className="headingbelow3">View Case Study ----- </h3>
        <a href="/">S K I P</a>
      </div>
      <div style={{ backgroundColor: "#f8f8f8" }} className="app_image">
        <img
          style={{
            height: "60%",
            marginTop: "8%",
            marginLeft: "-18%",
          }}
          src={Mobileimage1}
          alt="..."
        />
        <img
          style={{
            height: "75%",
            position: "absolute",
            top: "11%",
            left: "75%",
          }}
          src={Mobileimage2}
          alt="..."
        />
      </div>
      <div style={{ backgroundColor: "#6639d6" }} className="app_circle">
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
                svgDraw: 0.55,
              }}
              to={{
                svgDraw: 0.7,
              }}
              duration={300}
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

export default Scroll3;
