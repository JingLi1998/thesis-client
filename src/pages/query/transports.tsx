import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import styled from "styled-components";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Label from "../../components/Label";
import SmallSpinner from "../../components/SmallSpinner";
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

const Transports = () => {
  const [id, setId] = useState<string | null>(null);

  const { setSrc } = useJsonContext();

  const { handleSubmit, register } = useForm<FormInput>();

  const { isLoading, data } = useQuery<Data>(
    ["transportId", id],
    () =>
      fetch(`${QUERY_URL}/transport/${id}`, {
        credentials: "include",
      }).then((res) => {
        return res.json();
      }),
    { enabled: id }
  );

  const onSubmit = (data: FormInput) => {
    setId(data.id);
  };

  useEffect(() => {
    setSrc(data);
  }, [data, setSrc]);

  return (
    <section>
      <Heading>Transport Query Interface</Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormHeading>Transport Details</FormHeading>
        <Span>Query aggregated transports based on ID</Span>
        <Label>Transport ID</Label>
        <Input type="text" name="id" placeholder="1" ref={register} />
        <Button>Submit</Button>
      </form>
      {isLoading && <SmallSpinner />}
    </section>
  );
};

export default Transports;
