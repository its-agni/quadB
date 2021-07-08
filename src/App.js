import React, { useState } from "react";
import "./App.css";
import Telegram from "./components/Telegram/Telegram";
import "bootstrap/dist/css/bootstrap.min.css";
import List from "./components/List/List";
import HeaderDisplay from "./components/Header/HeaderDisplay";

function App() {
  const [isTrue, setTrue] = useState(false);
  const onClickHandler = () => {
    setTrue(true);
  };
  const [isChoice, setChoice] = useState("BTC");

  const onChoiceHandler = (choice) => {
    setChoice(choice);
  };
  const list = [
    {
      id: "1",
      platform: "WazirX",
      ltprice: "26,59,468",
      buy: "26,59,468",
      sell: "26,60,000",
      diff: 0.19,
      savings: "5,158",
    },
    {
      id: "2",
      platform: "Bitbns",
      ltprice: "26,77,254",
      buy: "26,69,788",
      sell: "26,83,501",
      diff: 0.86,
      savings: "22,944",
    },
    {
      id: "3",
      platform: "Goitus",
      ltprice: "26,80,000",
      buy: "26,80,000",
      sell: "26,80,000",
      diff: 0.97,
      savings: "25,690",
    },
    {
      id: "4",
      platform: "Colodax",
      ltprice: "25,83,138",
      buy: " 25,75,167",
      sell: "26,08,984",
      diff: -2.68,
      savings: "71,172",
    },
    {
      id: "5",
      platform: "Zebpay",
      ltprice: "26,64,000",
      buy: "26,74,900",
      sell: "26,64,000",
      diff: 0.37,
      savings: "9,690",
    },
    {
      id: "6",
      platform: "CoinDCX",
      ltprice: "26,62,000",
      buy: "26,62,000",
      sell: "26,67,699",
      diff: -0.29,
      savings: "7,690",
    },
  ];

  return (
    <>
      <div className="container">
        {isTrue && <Telegram />}
        {!isTrue && (
          <div className="container">
            <HeaderDisplay
              onChoiceClick={onChoiceHandler}
              onClick={onClickHandler}
            />

            <ul
              className="row"
              style={{
                fontWeight: "bold",
                fontSize: "24px",
                color: "#3dc6c1",
                marginTop: "40px",
              }}
            >
              <li className="col-1">#</li>
              <li className="col">Platform</li>
              <li className="col">Last Traded Price</li>
              <li className="col-4">Buy/Sell Price</li>
              <li className="col">Difference</li>
              <li className="col">Savings</li>
            </ul>
            {isChoice === "BTC" &&
              list.map((item) => (
                <List
                  key={item.id}
                  id={item.id}
                  platform={item.platform}
                  ltprice={item.ltprice}
                  buy={item.buy}
                  sell={item.sell}
                  diff={item.diff}
                  savings={item.savings}
                />
              ))}
            {isChoice !== "BTC" && <p>No content</p>}
          </div>
        )}
      </div>
      .,
    </>
  );
}
export default App;
