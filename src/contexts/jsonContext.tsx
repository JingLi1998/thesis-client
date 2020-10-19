import React, { createContext, useContext, useState } from "react";

type Context = {
  src: Record<string, any>;
  setSrc: React.Dispatch<any>;
};

const JsonContext = createContext<Context>({
  src: {},
  setSrc: () => null,
});

export const useJsonContext = () => {
  return useContext(JsonContext);
};

type Props = {
  children: React.ReactNode;
};

const JsonProvider = ({ children }: Props) => {
  const [src, setSrc] = useState<any>({});

  return (
    <JsonContext.Provider value={{ src, setSrc }}>
      {children}
    </JsonContext.Provider>
  );
};

export default JsonProvider;
