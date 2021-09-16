import "./App.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "react-gsap";
import { Controls, PlayState, Tween } from "react-gsap";

function Scroll2({
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
      <div style={{ backgroundColor: color2 }} className="app_image">
        <img
          style={{
            position: "absolute",
            objectFit: "contain",
            left: "52%",
            top: topm,
            height: "380px",
            marginLeft: "7%",
            marginTop: "0%",
          }}
          src={image2}
          alt="..."
        />
        <img
          style={{
            position: "absolute",
            objectFit: "contain",
            left: "90%",
            height: "380px",
            marginLeft: "-5%",
            marginTop: "-5%",
          }}
          src={image1}
          alt="..."
        />
      </div>
      <div style={{ backgroundColor: color1 }} className="app_circle">
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
                svgDraw: 0.28,
              }}
              to={{
                svgDraw: 0.41,
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

export default Scroll2;
