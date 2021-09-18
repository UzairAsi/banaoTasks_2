import React from "react";
import "./App.css";
import { Controller, Scene } from "react-scrollmagic";
import Scroll1 from "./Scroll1";
import Scroll2 from "./Scroll2";
import Scroll3 from "./Scroll3";
import Scroll4 from "./Scroll4";
import Nasaimage1 from "./measure-total-body-weight-through-fitness-app.png";
import Nasaimage2 from "./nasa-fitness-tracking-mobile-app.png";
import Blockchain1 from "./veme-app-ui-design.png";
import Blockchain2 from "./veme-blockchain-app-developed.png";
import { Tween } from "react-gsap";
import dominobread from "./dominos-bread.png";
function App() {
  return (
    <div className="App">
      <div></div>
      <div className="container">
        <Controller globalSceneOptions={{ triggerHook: "onLeave" }}>
          <Scene classToggle="visible" pin>
            <div className="panel blue">
              <Scroll1 />
            </div>
          </Scene>
          <Scene classToggle="visible" pin>
            <div className="panel turqoise">
              <Scroll2
                color1="#20124D"
                color2="#120533"
                image1={Nasaimage1}
                image2={Nasaimage2}
                topm="19%"
                he1="Powered by advance"
                he2="NASA"
                he3="Algorithms"
                he4="ABC 345"
                froms={0.13}
                tos={0.28}
              />
            </div>
          </Scene>
          <Scene pin>
            <div className="panel green">
              <Scroll4
                color1="#5c3baf"
                color2="#2c136b"
                image1={Blockchain1}
                image2={Blockchain2}
                topm="45%"
                he1="The Next Big"
                he2="Blockchain"
                he3="Revolution"
                he4="ABC 234"
              />
            </div>
          </Scene>
          <Scene pin>
            <div className="panel bordeaux">
              <Scroll3 />
            </div>
          </Scene>
        </Controller>
      </div>

      <div style={{ height: "500px" }}></div>
    </div>
  );
}
export default App;
