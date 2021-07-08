import React, { useState } from "react";
// import { Redirect } from "react-router-dom";
// import Telegram from "../Telegram/Telegram";

import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Selections.module.css";

const Selections = (props) => {
  const [currentValue, setValue] = useState("BTC");
  const onChangeHandler = (event) => {
    setValue(event.target.value);
  };
  props.onChoice(currentValue);

  return (
    <form className={styles.select}>
      <select className={`${styles.pad} ${styles.custom}`}>
        <option>INR</option>
      </select>
      <select
        value={currentValue}
        onChange={onChangeHandler}
        className={`${styles.pad} ${styles.custom}`}
      >
        <option>BTC</option>
        <option>ETH</option>
        <option>USDT</option>
        <option>XRP</option>
        <option>TRX</option>
        <option>DASH</option>
        <option>ZEC</option>
        <option>XEM</option>
        <option>IOST</option>
        <option>WIN</option>
        <option>BTT</option>
        <option>WRX</option>
      </select>
      <button
        type="button"
        onClick={null}
        className={`${styles.pad} ${styles.custom}`}
      >
        {currentValue}
      </button>
      <button type="button" className={styles.tele} onClick={props.onClick}>
        Connect Telegram
      </button>
    </form>
  );
};

export default Selections;
