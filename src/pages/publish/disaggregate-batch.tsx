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
  gtin_batch_number: string;
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

const DisaggregateBatch = () => {
  const { setSrc } = useJsonContext();
  const [isLoading, setIsLoading] = useState(false);

  const { handleSubmit, register } = useForm<FormInput>();

  const onSubmit = async (data: FormInput) => {
    setIsLoading(true);

    const payload = {
      gtin_batch_number: data.gtin_batch_number,
      transaction_data: {
        who: data.who,
        where: data.where,
        why: "disaggregate batch",
      },
    };

    const response = await fetch(`${PUBLISH_URL}/batch`, {
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
      <Heading>Disaggregate Batch Publish Interface</Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormHeading>Batch Details</FormHeading>
        <Span>Select which batch to disaggregate.</Span>
        <Label>Batch GTIN</Label>
        <Input
          type="text"
          name="gtin_batch_number"
          placeholder="1"
          ref={register}
        />
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

export default DisaggregateBatch;
