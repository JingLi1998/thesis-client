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

const StockUnits = () => {
  const [id, setId] = useState<string | null>(null);

  const { setSrc } = useJsonContext();

  const { handleSubmit, register } = useForm<FormInput>();

  const { isLoading, data } = useQuery<Data>(
    ["stockUnitId", id],
    () =>
      fetch(`${QUERY_URL}/stock-unit/${id}`, {
        method: "get",
        credentials: "same-origin",
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
      <Heading>Stock Unit Query Interface</Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormHeading>Stock Unit Details</FormHeading>
        <Span>Query stock units based on GTIN</Span>
        <Label>Stock Unit GTIN</Label>
        <Input type="text" name="id" placeholder="1" ref={register} />
        <Button>Submit</Button>
      </form>
      {isLoading && <SmallSpinner />}
    </section>
  );
};

export default StockUnits;
