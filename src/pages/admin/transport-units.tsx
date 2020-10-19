import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { QUERY_URL } from "../../constants";
import { useJsonContext } from "../../contexts/jsonContext";

export type Transport = {
  id: string;
  status: string;
};

type FormInput = {
  id: string;
};

type Data = {
  transport: Transport;
  message?: string;
  status?: string;
};

const Transports = () => {
  const [id, setId] = useState<string | null>(null);

  const { setSrc } = useJsonContext();

  const { handleSubmit, register } = useForm<FormInput>();

  const { isLoading, data } = useQuery<Data>(
    ["transportId", id],
    () =>
      fetch(`${QUERY_URL}/transport/${id}`).then((res) => {
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
  } else if (data?.transport) {
    setSrc(data);
    result = (
      <>
        <p>Stock Unit ID - {data.transport.id}</p>
        <p>Status - {data.transport.status}</p>
      </>
    );
  } else if (data?.message) {
    result = <span>{data.message}</span>;
  }

  return (
    <section>
      <h3>Transport Query Interface</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" name="id" ref={register} />
        <button>Submit</button>
      </form>
      <h4>Result</h4>
      {result}
    </section>
  );
};

export default Transports;