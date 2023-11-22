import { useState } from "react";
import "./SmartHome.css";

function SmartHome() {
  const [on, setOn] = useState(true);

  return (
    <div className="smart-home">
      <div className="container">
        <div className={`light-bulb ${on ? "light-on" : ""}`}>
          <div className="light-bulb-top"></div>
          <div className="light-bulb-middle"></div>
        </div>
      </div>
      <div className="smart-home-buttons">
        <button className="smart-home-button" onClick={() => setOn(true)}>
          On
        </button>
        <button className="smart-home-button" onClick={() => setOn(false)}>
          Off
        </button>
      </div>
      <p className="smart-home-text">I like smart homes</p>
    </div>
  );
}

export default SmartHome;
