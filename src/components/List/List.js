import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./List.module.css";

const List = (props) => {
  const [isRed, setRed] = useState(false);

  useEffect(() => {
    if (props.diff < 0) {
      setRed(true);
    }
  }, [props.diff]);

  return (
    <>
      {/* <ul className="row">
        <li className="col">#</li>
        <li className="col">Platform</li>
        <li className="col">Last Traded Price</li>
        <li className="col">Buy/Sell Price</li>
        <li className="col">Difference</li>
        <li className="col">Savings</li>
      </ul> */}
      <ul className={`row ${styles.list}`}>
        <li className="col-1">{props.id}</li>
        <li className="col">{props.platform}</li>
        <li className="col">₹{props.ltprice}</li>
        <li className="col-4">
          ₹{props.buy}/₹{props.sell}
        </li>
        <li className="col" style={{ color: !isRed ? "" : "#da5757" }}>
          {props.diff}%
        </li>

        <li className="col" style={{ color: !isRed ? "" : "#da5757" }}>
          ₹{props.savings}
        </li>
      </ul>
    </>
  );
};

export default List;
