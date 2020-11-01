import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Label from "../../components/Label";
import SmallSpinner from "../../components/SmallSpinner";
import { JSON_HEADERS, PUBLISH_URL } from "../../constants";
import { useJsonContext } from "../../contexts/jsonContext";

type FormInput = {
  brand: string;
  model: string;
};

const Heading = styled.h3`
  font-weight: 600;
  font-size: 1.5rem;
  color: var(--primary);
`;

const FormHeading = styled.h4`
  margin: 0.5rem 0;
  font-weight: 500;
`;

const Span = styled.span`
  display: block;
  font-size: 0.875rem;
  margin: 0.5rem 0;
`;

const TransportUnits = () => {
  const { setSrc } = useJsonContext();
  const [isLoading, setIsLoading] = useState(false);

  const { handleSubmit, register } = useForm<FormInput>();

  const onSubmit = async (data: FormInput) => {
    setIsLoading(true);

    const payload = {
      brand: data.brand,
      model: data.model,
    };

    const response = await fetch(`${PUBLISH_URL}/transport-unit`, {
      method: "post",
      headers: JSON_HEADERS,
      body: JSON.stringify(payload),
    });
    const responseData = await response.json();
    setSrc(responseData);
    setIsLoading(false);
  };

  return (
    <section>
      <Heading>Transport Unit Publish Interface</Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormHeading>Transport Unit Details</FormHeading>
        <Span>Describe the Transport Unit</Span>
        <Label>Transport Brand</Label>
        <Input type="text" name="brand" placeholder="Honda" ref={register} />
        <Label>Transport Model</Label>
        <Input type="text" name="model" placeholder="Civic" ref={register} />
        <Button>Submit</Button>
      </form>
      {isLoading && <SmallSpinner />}
    </section>
  );
};

export default TransportUnits;
