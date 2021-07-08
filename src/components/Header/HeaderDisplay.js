import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./HeaderDisplay.module.css";
import Selections from "./Selections";

const HeaderDisplay = (props) => {
  const [isChoice, setChoice] = useState("BTC");

  const onChoiceHandler = (choice) => {
    setChoice(choice);
  };
  props.onChoiceClick(isChoice);
  return (
    <>
      <h1 className={styles.title}>React Info</h1>
      <Selections onClick={props.onClick} onChoice={onChoiceHandler} />
      {isChoice === "BTC" && (
        <div className={`row-xs-5 ${styles.container}`}>
          <div className="col">
            <h1>0.33%</h1>
            <p>5 Mins</p>
          </div>
          <div className="col">
            <h1>0.96%</h1>
            <p>1 Hour</p>
          </div>
          <div className="col-4">
            <p>Best Price to Trade</p>
            <h1 className={styles.h1}>₹26,43,894</h1>
            <p>Average {isChoice}/INR net price including commission</p>
          </div>
          <div className="col">
            <h1>0.71%</h1>
            <p>1 Day</p>
          </div>
          <div className="col">
            <h1>6%</h1>
            <p>7 Days</p>
          </div>
        </div>
      )}
      {isChoice !== "BTC" && <h1>No content</h1>}
    </>
  );
};

export default HeaderDisplay;
