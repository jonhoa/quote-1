import { ProductsIndex } from "./ProductsIndex";
import { ProductsNew } from "./ProductsNew";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

export function Content() {

  const [quote, setQuote] = useState([]);

  const handleIndexQuote = () => {
    axios.get("https://gist.githubusercontent.com/benchprep/dffc3bffa9704626aa8832a3b4de5b27/raw/quotes.json").then(response =>
    {
      console.log(response.data);
      setQuote(response.data);
});
  };
  useEffect(handleIndexQuote, []);
  return (
    <div>
      <ProductsNew />
      <ProductsIndex quote = {quote} handleIndexQuote = {handleIndexQuote}/>
    </div>
  );
}
