import React, { createContext, useCallback, useContext, useState } from "react";
import { AUTH_URL } from "../constants";

type Context = {
  user: {
    email: string;
    role: string;
  } | null;
  setUser: React.Dispatch<any>;
  getUser: () => void;
  isLoading: boolean;
};

const AuthContext = createContext<Context>({
  user: null,
  setUser: () => null,
  getUser: () => null,
  isLoading: true,
});

export const useAuthContext = () => {
  return useContext(AuthContext);
};

type Props = {
  children: React.ReactNode;
};

const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  const getUser = useCallback(async () => {
    setIsLoading(true);
    const res = await fetch(`${AUTH_URL}/current-user`);
    if (res.ok) {
      const user = await res.json();
      console.log(user);
      setUser(user);
    } else {
      setUser(null);
    }
    setIsLoading(false);
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, getUser, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
