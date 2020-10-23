import React from "react";
import { useForm } from "react-hook-form";
import { PUBLISH_URL } from "../constants";
// import { useJsonContext } from "../contexts/jsonContext";

type FormInput = Record<string, any>;

type Props = {
  identifiers: string[];
  unitType: string;
};

const PublishForm = ({ identifiers, unitType }: Props) => {
  const { handleSubmit, register } = useForm<FormInput>();

  // const { setSrc } = useJsonContext();

  const onSubmit = async (data: FormInput) => {
    const response = await (
      await fetch(`${PUBLISH_URL}/${unitType}`, {
        method: "post",
        body: JSON.stringify(data),
      })
    ).json();
    console.log(response);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {identifiers.map((identifier) => (
        <input key={identifier} name={identifier} ref={register} />
      ))}
      <button>Submit</button>
    </form>
  );
};

export default PublishForm;
