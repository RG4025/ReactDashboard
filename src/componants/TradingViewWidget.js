// TradingViewWidget.jsx

import React, { useEffect, useRef } from 'react';

let tvScriptLoadingPromise;

export default function TradingViewWidget() {
  const onLoadScriptRef = useRef();

  useEffect(
    () => {
      onLoadScriptRef.current = createWidget;

      if (!tvScriptLoadingPromise) {
        tvScriptLoadingPromise = new Promise((resolve) => {
          const script = document.createElement('script');
          script.id = 'tradingview-widget-loading-script';
          script.src = 'https://s3.tradingview.com/tv.js';
          script.type = 'text/javascript';
          script.onload = resolve;

          document.head.appendChild(script);
        });
      }

      tvScriptLoadingPromise.then(() => onLoadScriptRef.current && onLoadScriptRef.current());

      return () => onLoadScriptRef.current = null;

      function createWidget() {
        if (document.getElementById('tradingview_afea3') && 'TradingView' in window) {
          new window.TradingView.widget({
            autosize: true,
            symbol: "BSE:SENSEX",
            interval: "W",
            timezone: "Asia/Kolkata",
            theme: "dark",
            style: "1",
            locale: "in",
            enable_publishing: false,
            allow_symbol_change: true,
            container_id: "tradingview_afea3"
          });
        }
      }
    },
    []
  );


  let isLoaded = true;

      setTimeout(()=>{
        isLoaded =  true;
      },2000)

  return (
    <>

    {

      isLoaded ? <div>

      <div className='fs-6 fw-bold trading_marquee'>
        <marquee behavior="right" direction=""><span className='text-primary'>Note :</span> This is the  BSE SENSEX INDEX! Please tap to search bar and explore other index, This Chart is Reading purpose only..</marquee>
      </div>
  
      <div className='tradingview-widget-container' style={{ height: "100%", width: "100%" }}>
        <div id='tradingview_afea3'>
          </div>
        <div className="tradingview-widget-copyright">
        </div>
      </div>
      </div> : <div className='d-flex justify-content-center align-items-center'> <h1>Loading!!</h1> </div>


    }

    
    </>
  )
}
