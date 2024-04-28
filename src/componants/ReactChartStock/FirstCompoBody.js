import React,{createContext} from "react";
import { useState , useRef, useEffect} from "react";
import ChartForStock from "./ChartForStock";
import LineChartForStock from "./LineChartForStock";
import axios from "axios";

const setVolume = createContext();

export default function FirstCompoBody() {
  
  const stockName = useRef();
  const addCurrValue = useRef();
  const add24High = useRef();
  const add24Low = useRef();
  const addTotalVolume = useRef();
  
  const apiKey = 'UC99T3JWN6Y82GDT';

    const [symbol, setSymbol] = useState("IBM");
  
  // const [last, setLastData] = useState({});
  
  const [data, setData] = useState({});
      
  const handle_Submit = (event) => {
    setSymbol(event.target.value);
    };


    let url =  `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${apiKey}`;

     useEffect(() =>{
       axios.get(url).then((response) =>{
         console.log(response.data);
          setData(response.data);
        }).catch((error)=>{
          console.log(error);
        })
      },[symbol])
   
      let volumeForChart;
      console.log(data)
      useEffect(() =>{
        
        setTimeout(() => {
          if(data["Global Quote"]){
        stockName.current.innerText = `${data["Global Quote"]['01. symbol']}`
        addCurrValue.current.innerText = `${data["Global Quote"]['05. price']} INR`;
        add24High.current.innerText = `${data["Global Quote"]['03. high']} INR`;
        add24Low.current.innerText = `${data["Global Quote"]['04. low']} INR`;
        addTotalVolume.current.innerText = `${data["Global Quote"]['06. volume']} `;
         volumeForChart = data["Global Quote"]['06. volume'];
        }else{
          addCurrValue.current.innerText = " -:- INR"
          add24High.current.innerText = ` -:- INR`;
          add24Low.current.innerText = `-:- INR`;
          addTotalVolume.current.innerText = `-:- `;
          volumeForChart = 1979978686;
      }
      
    }, 1000);
    
  },[data]);



    
    
    return (
      <>
      <section className="section_first">
        <div className="row">
          <div className="col-12 col-sm-3">
            <span> Current Stock : <span className="fs-5 text-warning" ref={stockName}></span> </span>
            <select
              className="form-select form-select-lg mb-3 mb-md-0 mt-2"
              name="selectCoin"
              style={{ width: "fit-content" }}
              onChange={handle_Submit}
            >
              <option value="IBM">Select Stock</option>
              <option value="RELI">Reliance</option>
              <option value="RELI">Reliance</option>
              <option value="RELI">Reliance</option>
              <option value="RELI">Reliance</option>
              <option value="RELI">Reliance</option>
              <option value="RELI">Reliance</option>
              <option value="RELI">Reliance</option>
              <option value="RELI">Reliance</option>
              <option value="RELI">Reliance</option>
              <option value="RELI">Reliance</option>
              <option value="RELI">Reliance</option>
              <option value="RELI">Reliance</option>
              <option value="RELI">Reliance</option>
              <option value="RELI">Reliance</option>
              <option value="RELI">Reliance</option>
              <option value="IBM">IBM</option>
              <option value="INFY">Infosys</option>
              <option value="MUTHOOTFIN">Muthoot Finance</option>
              <option value="TATATECH">Tata Technologies</option>
              <option value="ITC">ITC</option>
              <option value="SBIN">SBI</option>
              <option value="BAJFINANCE">Bajaj Finance</option>
              <option value="MARUTI">Maruti Suzuki india</option>
            </select>
          </div>

          <div className="col-12 col-sm-8 ms-md-5">
            <div className="row">
              <div className=" col-6  col-xl-3">
                <div className="main_div mb-3 ">
                  <h5>Current Prise :</h5>
                  <h6 ref={addCurrValue} className="text-warning"></h6>
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

      <section>
        <div className="row">
          <div className="col-12 col-lg-6 mt-5">
            <setVolume.Provider value={volumeForChart}>

            <ChartForStock />
            </setVolume.Provider>
          </div>

          <div className="col-12 col-lg-6 mt-5">

            <LineChartForStock/>
          </div>
        </div>
      </section>
    </>
  );
}

export {setVolume};
