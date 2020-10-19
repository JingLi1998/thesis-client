import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { QUERY_URL } from "../../constants";
import { useJsonContext } from "../../contexts/jsonContext";

export type Batch = {
  gtin_batch_number: string;
  isAggregated: boolean;
};

type FormInput = {
  id: string;
};

type Data = {
  batch: Batch;
  message?: string;
  status?: string;
};

const Batches = () => {
  const [id, setId] = useState<string | null>(null);

  const { setSrc } = useJsonContext();

  const { handleSubmit, register } = useForm<FormInput>();

  const { isLoading, data } = useQuery<Data>(
    ["batchId", id],
    () =>
      fetch(`${QUERY_URL}/batch/${id}`).then((res) => {
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
  } else if (data?.batch) {
    setSrc(data);
    result = (
      <>
        <p>Batch ID - {data.batch.gtin_batch_number}</p>
        <p>Is Aggregated? - {data.batch.isAggregated ? "Yes" : "No"}</p>
      </>
    );
  } else if (data?.message) {
    result = <span>{data.message}</span>;
  }

  return (
    <section>
      <h3>Batch Query Interface</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" name="id" ref={register} />
        <button>Submit</button>
      </form>
      <h4>Result</h4>
      {result}
    </section>
  );
};

export default Batches;
