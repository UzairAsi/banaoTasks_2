import "./App.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "react-gsap";
import { Controls, PlayState, Tween } from "react-gsap";

function Scroll4({
  color1,
  color2,
  he1,
  he2,
  he3,
  he4,
  image1,
  image2,
  topm,
  tos,
  froms,
}) {
  return (
    <div className="app">
      <div style={{ backgroundColor: color1 }} className="app_text">
        <h4
          style={{
            position: "absolute",
            left: "41.2%",
            top: "24%",
            zIndex: "1",
          }}
        >
          {he1}
        </h4>
        <h1
          style={{
            position: "absolute",
            left: "41.2%",
            top: "26.7%",
            zIndex: "1",
          }}
        >
          {he2}
        </h1>
        <h4
          style={{
            position: "absolute",
            left: "41.5%",
            top: "35.3%",
            zIndex: "1",
          }}
        >
          {he3}
        </h4>
        <h1 style={{ marginTop: "70%", marginLeft: "-54%" }}>{he4}</h1>
        <h3 style={{ marginTop: "2%", marginLeft: "-59.5%" }}>We are the</h3>
        <h3 style={{ marginTop: "0%", marginLeft: "-42%" }}>
          best web development
        </h3>
        <h3 style={{ marginTop: "0", marginLeft: "-44%" }}>
          company in the world
        </h3>
        <a href="/" style={{ marginTop: "3%" }}>
          S K I P
        </a>
        <h3 style={{ marginTop: "6%", color: "grey", marginBottom: "45%" }}>
          Coming Soon
        </h3>
      </div>
      <div
        style={{ backgroundColor: color2, overflow: "hidden" }}
        className="app_image"
      >
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
                objectFit: "cover",
                left: "90%",
                overflow: "hidden",
                height: "380px",
                marginLeft: "65%",
                marginTop: "-5%",
              }}
              src={image1}
              alt="..."
            />
          </Tween>
          <Tween
            from={{
              y: "50px",
              x: "0px",
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
                position: "absolute",
                objectFit: "cover",
                left: "52%",
                top: topm,
                height: "380px",
                marginLeft: "7%",
                marginTop: "0%",
              }}
              src={image2}
              alt="..."
            />
          </Tween>
        </ScrollTrigger>
      </div>
      <div style={{ backgroundColor: color1 }} className="app_circle">
        <ScrollTrigger start="0px top" end="2px center" scrub={0.5}>
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
                cx="220"
                cy="180"
              ></circle>
            </Tween>
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
                d="M 224 52 A 200 173 0 0 1 210 192"
                fill="none"
                stroke="#1276b1"
                strokeWidth="4"
              />
            </Tween>
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

export default Scroll4;
