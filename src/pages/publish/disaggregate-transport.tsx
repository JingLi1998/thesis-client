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
  id: string;
  who: string;
  where: string;
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

const DisaggregateTransport = () => {
  const { setSrc } = useJsonContext();
  const [isLoading, setIsLoading] = useState(false);

  const { handleSubmit, register } = useForm<FormInput>();

  const onSubmit = async (data: FormInput) => {
    setIsLoading(true);

    const payload = {
      id: data.id,
      transaction_data: {
        who: data.who,
        where: data.where,
        why: "disaggregate transport",
      },
    };

    const response = await fetch(`${PUBLISH_URL}/transport`, {
      method: "put",
      headers: JSON_HEADERS,
      body: JSON.stringify(payload),
    });
    const responseData = await response.json();
    setSrc(responseData);
    setIsLoading(false);
  };

  return (
    <section>
      <Heading>Disaggregate Transport Publish Interface</Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormHeading>Transport Details</FormHeading>
        <Span>Select which transport to disaggregate.</Span>
        <Label>Transport ID</Label>
        <Input type="text" name="id" placeholder="1" ref={register} />
        <FormHeading>Transaction Details</FormHeading>
        <Span>Describe who performed and where transaction occurred</Span>
        <Label>Who (GLN) Any number 1-5</Label>
        <Input type="text" name="who" placeholder="1" ref={register} />
        <Label>Where (GLN) Any number 1-5</Label>
        <Input type="text" name="where" placeholder="1" ref={register} />
        <Button>Submit</Button>
      </form>
      {isLoading && <SmallSpinner />}
    </section>
  );
};

export default DisaggregateTransport;
