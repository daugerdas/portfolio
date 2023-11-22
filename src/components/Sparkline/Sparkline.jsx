import React from "react";

import "./Sparkline.css";
import { Sparklines, SparklinesLine } from "react-sparklines";

function Sparkline() {
  return (
    <div className="sparkline">
      <p className="sparkline-text">
        My interest in data visualization and dashboards over time 📈
      </p>
      <Sparklines height="145" data={[1, 3, 7, 2, 5, 10, 6, 3, 8, 10, 16, 20]}>
        <SparklinesLine color="gray" />
      </Sparklines>
    </div>
  );
}

export default Sparkline;
