import { useState,useEffect } from "react";
function useCurrencyInfo(currency) {
  const [currencies, setCurrencies] = useState({});
  useEffect(()=>{
    fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
    .then((res)=>res.json())
    .then((res)=>setCurrencies(res[currency]));
  },[currency]);
  console.log(currencies);
  return currencies;
}

export default useCurrencyInfo;