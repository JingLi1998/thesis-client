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
  name: string;
  latitude: number;
  longitude: number;
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

const Locations = () => {
  const { setSrc } = useJsonContext();
  const [isLoading, setIsLoading] = useState(false);

  const { handleSubmit, register } = useForm<FormInput>();

  const onSubmit = async (data: FormInput) => {
    setIsLoading(true);

    const payload = {
      name: data.name,
      latitude: data.latitude,
      longitude: data.longitude,
    };

    const response = await fetch(`${PUBLISH_URL}/location`, {
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
      <Heading>Location Publish Interface</Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormHeading>Location Details</FormHeading>
        <Span>Describe location name and coordinates</Span>
        <Label>Name</Label>
        <Input type="text" name="name" placeholder="Sydney" ref={register} />
        <Label>Latitude</Label>
        <Input
          type="number"
          step="0.01"
          placeholder="0.00"
          name="latitude"
          ref={register}
        />
        <Label>Longitude</Label>
        <Input
          type="number"
          step="0.01"
          placeholder="0.00"
          name="longitude"
          ref={register}
        />
        <Button>Submit</Button>
      </form>
      {isLoading && <SmallSpinner />}
    </section>
  );
};

export default Locations;
