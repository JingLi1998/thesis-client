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
  asset_type: string;
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

const AssetUnits = () => {
  const { setSrc } = useJsonContext();
  const [isLoading, setIsLoading] = useState(false);

  const { handleSubmit, register } = useForm<FormInput>();

  const onSubmit = async (data: FormInput) => {
    setIsLoading(true);

    const payload = {
      asset_type: data.asset_type,
    };

    const response = await fetch(`${PUBLISH_URL}/asset-unit`, {
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
      <Heading>Asset Unit Publish Interface</Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormHeading>Asset Unit Details</FormHeading>
        <Span>What type of asset? E.g. pallet, box, etc.</Span>
        <Label>Asset type</Label>
        <Input
          type="text"
          name="asset_type"
          placeholder="pallet"
          ref={register}
        />
        <Button>Submit</Button>
      </form>
      {isLoading && <SmallSpinner />}
    </section>
  );
};

export default AssetUnits;
