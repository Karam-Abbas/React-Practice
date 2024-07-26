import { useState,useEffect } from "react";
function useCurrencyInfo(currency) {
  const [currencies, setCurrencies] = useState({});
  useEffect(()=>{
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`)
    .then((res)=>res.json())
    .then((res)=>setCurrencies(res[currency]));
  },[currency]);
  console.log(currencies);
  return currencies;
}

export default useCurrencyInfo;