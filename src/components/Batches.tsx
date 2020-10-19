import React from "react";
import { useQuery } from "react-query";
// import useUnitQuery from "../hooks/useUnitQuery";

export type Batch = {
  gtin_batch_number: string;
  aggregation_date: string;
  disaggregation_date: string | null;
  status: string;
};

type Data = {
  batches: Batch[];
};

const Batches = () => {
  const { isLoading, data } = useQuery<Data>("batches", () =>
    fetch(`https://www.trackntrace.network/query/api/batches`).then((res) =>
      res.json()
    )
  );

  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      {data && (
        <>
          {data.batches.map((batch) => (
            <div>
              {batch.gtin_batch_number}- {batch.aggregation_date} -{" "}
              {batch.disaggregation_date || "Null"} - {batch.status}
            </div>
          ))}
        </>
      )}
    </>
  );
};

export default Batches;
