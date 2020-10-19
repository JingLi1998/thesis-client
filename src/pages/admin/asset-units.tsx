import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { QUERY_URL } from "../../constants";
import { useJsonContext } from "../../contexts/jsonContext";

export type AssetUnit = {
  grai: string;
  isAggregated: boolean;
};

type FormInput = {
  id: string;
};

type Data = {
  asset_unit: AssetUnit;
  message?: string;
  status?: string;
};

const AssetUnits = () => {
  const [id, setId] = useState<string | null>(null);

  const { setSrc } = useJsonContext();

  const { handleSubmit, register } = useForm<FormInput>();

  const { isLoading, data } = useQuery<Data>(
    ["assetUnitId", id],
    () =>
      fetch(`${QUERY_URL}/asset-unit/${id}`).then((res) => {
        return res.json();
      }),
    { enabled: id }
  );

  const onSubmit = (data: FormInput) => {
    setId(data.id);
  };

  let result = <span>No data</span>;
  if (isLoading) {
    result = <span>Loading...</span>;
  } else if (data?.asset_unit) {
    setSrc(data);
    result = (
      <>
        <p>Asset Unit ID - {data.asset_unit.grai}</p>
        <p>Is Aggregated? - {data.asset_unit.isAggregated ? "Yes" : "No"}</p>
      </>
    );
  } else if (data?.message) {
    result = <span>{data.message}</span>;
  }

  return (
    <section>
      <h3>Asset Unit Query Interface</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" name="id" ref={register} />
        <button>Submit</button>
      </form>
      <h4>Result</h4>
      {result}
    </section>
  );
};

export default AssetUnits;
