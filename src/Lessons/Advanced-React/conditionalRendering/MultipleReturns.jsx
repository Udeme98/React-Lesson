import { useState, useEffect } from "react";

const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      //done fetching data
      setIsLoading(false);
    }, 3000);
  }, []);

  if (isLoading) {
    return <h4>...Loading</h4>;
  }
  return <h1>Multiple Returns</h1>;
};
export default MultipleReturns;
