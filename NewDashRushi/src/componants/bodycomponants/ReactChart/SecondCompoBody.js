import React, { useEffect, useRef, createContext } from "react";
import { BarChart } from "./BarChart";
import { useState } from "react";
import LineChartForCrypto from "./LineChartForCrypto";
import axios from "axios";

const setVolumnCrypto = createContext();

export default function SecondCompoBody() {
  const addCurrValue = useRef();
  const add24High = useRef();
  const add24Low = useRef();
  const addTotalVolume = useRef();

  const [coin, setCoin] = useState("bitcoin");
  // const [coin, setCoin] = useState("");

  // const [last, setLastData] = useState({});

  const [data, setData] = useState({});

  const handle_Submit = (event) => {
    setCoin(event.target.value);
  };

  // let url = `https://api.coingecko.com/api/v3/coins/`;
  let url = `https://api.coingecko.com/api/v3/coins/${coin}`;

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [coin]);


      let volumemain;

  useEffect(() =>{

    
    setTimeout(() => {
      if (data.market_data) {
      addCurrValue.current.innerText = `${data.market_data.current_price.inr} INR`;
      add24High.current.innerText = `${data.market_data.high_24h.inr} INR`;
      add24Low.current.innerText = `${data.market_data.low_24h.inr} INR`;
      addTotalVolume.current.innerText = `${data.market_data.total_volume.inr} `;
      volumemain = data.market_data.total_volume.inr;
    } else {
      addCurrValue.current.innerText = " -:- INR";
      add24High.current.innerText = ` -:- INR`;
      add24Low.current.innerText = `-:- INR`;
      addTotalVolume.current.innerText = `-:- `;
      volumemain = 97897129;
    }
  }, 1000);
  
},[data,add24High,add24Low,addCurrValue,addTotalVolume]);
  return (
    <>
      <section className="section_first">
        <div className="row">
          <div className="col-12 col-sm-3">
            <h6 className="fs-6">
              Current Coin :{" "}
              <span
                className="fs-5 text-warning

"
              >
                {data.id}
              </span>{" "}
              {" "}
            </h6>


            <select
              className="form-select form-select-lg mb-3 mb-md-0"
              name="selectCoin"
              style={{ width: "fit-content" }}
              onChange={handle_Submit}
            >
              <option value="bitcoin">Select Coin</option>
              <option value="avalanche-2">Avalanche (AVAX)</option>
              <option value="binancecoin">Binance (BNB)</option>
              <option value="bitcoin">Bitcoin (BTC) </option>
              <option value="cardano">Cardano (ADA)</option>
              <option value="decentraland">Decentraland (MANA)</option>
              <option value="dogecoin">Dogecoin (DOGE)</option>
              <option value="ethereum">Ethereum (ETH)</option>
              <option value="ripple">Ripple (XRP)</option>
              <option value="solana">Solana (SOL)</option>
              <option value="tether">Tether (USDT)</option>
              <option value="bitcoin-cash">Bitcoin Cash</option>
              <option value="monero">Monero</option>
              <option value="kaspa">Kaspa</option>
              <option value="cosmos">Cosmos Hub</option>
              <option value="crypto-com-chain">Cronos</option>
              <option value="immutable-x">Immutable</option>
              <option value="maker">Maker</option>
              <option value="usd-coin">USDC</option>
              <option value="matic-network">Polygon</option>
            </select>
          </div>

          <div className="col-12 col-sm-8 ms-md-5">
            <div className="row">
              <div className=" col-6  col-xl-3">
                <div className="main_div mb-3 ">
                  <h5>Current Prise :</h5>
                  <h6 ref={addCurrValue} className="fs-5 text-warning"></h6>
                </div>
              </div>
              <div className=" col-6  col-xl-3">
                <div className="main_div mb-3">
                  <h5>24_hr High</h5>
                  <h6 ref={add24High} className="text-success"></h6>
                </div>
              </div>
              <div className=" col-6 col-xl-3">
                <div className="main_div">
                  <h5>24_hr Low</h5>
                  <h6 ref={add24Low} className="text-danger"></h6>
                </div>
              </div>
              <div className=" col-6 col-xl-3">
                <div className="main_div">
                  <h5>Total Volume</h5>
                  <h6 ref={addTotalVolume} className="text-success"></h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <h3>Current Price:{data.market_data.current_price["inr"]? data.market_data.current_price["inr"] : " "}</h3> */}
      <section className="section_first">
        <div className="row">
          <div className="col-12 col-lg-6 mt-5">
            <setVolumnCrypto.Provider value={volumemain}>

            <BarChart />
            </setVolumnCrypto.Provider>
          </div>
          <div className="col-12 col-lg-6 mt-5">
            <LineChartForCrypto />
          </div>
        </div>
      </section>
    </>
  );
}

export { setVolumnCrypto };
