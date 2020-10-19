import { useQuery } from "react-query";

const useUnitQuery = (unitType: string) => {
  return useQuery(
    unitType,
    () =>
      fetch(
        `https://www.trackntrace.network/query/api/${unitType}`
      ).then((res) => res.json()),
    { enabled: unitType }
  );
};

export default useUnitQuery;
