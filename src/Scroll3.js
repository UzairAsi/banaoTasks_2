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
        <ScrollTrigger start="-200px center" end="200px center" scrub={0.5}>
          <Tween
            from={{
              y: "500px",
              x: "100px",
              opacity: 0,
            }}
            to={{
              y: "0px",
              x: "0px",
              opacity: 1,
            }}
          >
            <img
              style={{
                height: "60%",
                marginTop: "8%",
                marginLeft: "-18%",
              }}
              src={Mobileimage1}
              alt="..."
            />
          </Tween>
          <Tween
            from={{
              y: "500px",
              x: "100px",
              opacity: 0,
            }}
            to={{
              y: "0px",
              x: "0px",
              opacity: 1,
            }}
          >
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
          </Tween>
        </ScrollTrigger>
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
                cx="115"
                cy="250"
              ></circle>
            </Tween>
            <circle
              fill="#1276b1"
              className="ball ball01"
              r="9"
              cx="220"
              cy="180"
            ></circle>
            <circle
              fill="#1276b1"
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
            <circle
              fill="#1276b1"
              className="ball ball01"
              r="9"
              cx="105"
              cy="-20"
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
                d="M 221 179 A 170 151 0 0 1 101 257"
                fill="none"
                stroke="#1276b1"
                strokeWidth="4"
              />
            </Tween>
            <path
              d="M 224 52 A 200 173 0 0 1 210 192"
              fill="none"
              stroke="#1276b1"
              strokeWidth="4"
            />
            <path
              d="M -29 63 A 134 141 0 0 1 112 -20"
              fill="none"
              stroke="#1276b1"
              strokeWidth="2"
            />
            <path
              d="M 66 -20 A 142 130 0 0 1 229 72"
              fill="none"
              stroke="#1276b1"
              strokeWidth="2"
            />
          </svg>
        </ScrollTrigger>
      </div>
    </div>
  );
}

export default Scroll3;
