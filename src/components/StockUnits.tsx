import React from "react";
import useUnitQuery from "../hooks/useUnitQuery";

const StockUnits = () => {
  const { isLoading, data } = useUnitQuery("stock-units");

  if (isLoading) return <div>Loading...</div>;

  return <div>{JSON.stringify(data)}</div>;
};

export default StockUnits;
