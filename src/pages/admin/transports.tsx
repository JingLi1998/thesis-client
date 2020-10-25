import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { QUERY_URL } from "../../constants";
import { useJsonContext } from "../../contexts/jsonContext";

export type TransportUnit = {
  giai: string;
  status: string;
};

type FormInput = {
  id: string;
};

type Data = {
  transport_unit: TransportUnit;
  message?: string;
  status?: string;
};

const TransportUnits = () => {
  const [id, setId] = useState<string | null>(null);

  const { setSrc } = useJsonContext();

  const { handleSubmit, register } = useForm<FormInput>();

  const { isLoading, data } = useQuery<Data>(
    ["transportUnitId", id],
    () =>
      fetch(`${QUERY_URL}/transport-unit/${id}`, {
        credentials: "include",
      }).then((res) => {
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
  } else if (data?.transport_unit) {
    setSrc(data);
    result = (
      <>
        <p>Transport Unit ID - {data.transport_unit.giai}</p>
        <p>Status - {data.transport_unit.status}</p>
      </>
    );
  } else if (data?.message) {
    result = <span>{data.message}</span>;
  }

  return (
    <section>
      <h3>Transport Unit Query Interface</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" name="id" ref={register} />
        <button>Submit</button>
      </form>
      <h4>Result</h4>
      {result}
    </section>
  );
};

export default TransportUnits;
