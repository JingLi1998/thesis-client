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

export type StockUnit = {
  gtin_serial_number: string;
  isAggregated: boolean;
};

type FormInput = {
  id: string;
};

type Data = {
  stock_unit: StockUnit;
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

const Locations = () => {
  const [id, setId] = useState<string | null>(null);

  const { setSrc } = useJsonContext();

  const { handleSubmit, register } = useForm<FormInput>();

  const { isLoading, data } = useQuery<Data>(
    ["locationId", id],
    () =>
      fetch(`${QUERY_URL}/logistic/${id}`, { credentials: "include" }).then(
        (res) => {
          return res.json();
        }
      ),
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
      <Heading>Location Query Interface</Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormHeading>Location Details</FormHeading>
        <Span>Query locations based on GLN</Span>
        <Label>Location GLN</Label>
        <Input type="text" name="id" placeholder="1" ref={register} />
        <Button>Submit</Button>
      </form>
      {isLoading && <SmallSpinner />}
    </section>
  );
};

export default Locations;
