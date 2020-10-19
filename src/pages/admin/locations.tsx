import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import styled from "styled-components";
import { QUERY_URL } from "../../constants";

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

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Locations = () => {
  const [id, setId] = useState<string | null>(null);

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
    <Wrapper>
      <h3>Stock Unit Query Interface</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" name="id" ref={register} />
        <button>Submit</button>
      </form>
      <h4>Result</h4>
      {result}
    </Wrapper>
  );
};

export default Locations;
