import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { QUERY_URL } from "../constants";
import { useJsonContext } from "../contexts/jsonContext";

type FormInput = {
  id: string;
};

type Data = Record<string, any>;

type Props = {
  identifier: string;
  unitType: string;
};

const QueryForm = ({ identifier, unitType }: Props) => {
  const [id, setId] = useState<string | null>(null);

  const { setSrc } = useJsonContext();

  const { handleSubmit, register } = useForm<FormInput>();

  const { isLoading, data } = useQuery<Data>(
    [identifier, id],
    () => fetch(`${QUERY_URL}/${unitType}/${id}`).then((res) => res.json()),
    { enabled: id }
  );

  const onSubmit = (data: FormInput) => {
    setId(data.id);
  };

  let message = <span>No data</span>;
  if (isLoading) {
    message = <span>Loading...</span>;
  } else if (data?.message) {
    message = <span>{data.message}</span>;
  } else {
    setSrc(data);
    message = <span>Query complete</span>;
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>{identifier}</label>
        <input name="id" ref={register} />
        <button>Submit</button>
      </form>
      {message}
    </>
  );
};

export default QueryForm;
