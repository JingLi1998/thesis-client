import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { QUERY_URL } from "../../constants";
import { useJsonContext } from "../../contexts/jsonContext";

export type StockUnit = {
  gtin_serial_number: string;
  isAggregated: boolean;
};

type FormInput = {
  id: string;
};

type Data = {
  stock_unit: StockUnit;
  message?: string;
  status?: string;
};

const Transactions = () => {
  const [id, setId] = useState<string | null>(null);

  const { setSrc } = useJsonContext();

  const { handleSubmit, register } = useForm<FormInput>();

  const { isLoading, data } = useQuery<Data>(
    ["stockUnitId", id],
    () =>
      fetch(`${QUERY_URL}/stock-unit/${id}`).then((res) => {
        return res.json();
      }),
    { enabled: id }
  );

  const onSubmit = (data: FormInput) => {
    setId(data.id);
  };

  let result = <span>No data</span>;
  if (isLoading) {
    result = <span>Loading...</span>;
  } else if (data?.stock_unit) {
    setSrc(data);
    result = (
      <>
        <p>Stock Unit ID - {data.stock_unit.gtin_serial_number}</p>
        <p>Is Aggregated? - {data.stock_unit.isAggregated ? "Yes" : "No"}</p>
      </>
    );
  } else if (data?.message) {
    result = <span>{data.message}</span>;
  }

  return (
    <section>
      <h3>Stock Unit Query Interface</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" name="id" ref={register} />
        <button>Submit</button>
      </form>
      <h4>Result</h4>
      {result}
    </section>
  );
};

export default Transactions;
