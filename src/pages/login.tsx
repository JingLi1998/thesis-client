import React from "react";
import { useForm } from "react-hook-form";
import { AUTH_URL } from "../constants";

type FormInput = {
  email: string;
  password: string;
};

const Login = () => {
  const { handleSubmit, register } = useForm<FormInput>();

  const onSubmit = async (data: FormInput) => {
    const response = await fetch(`${AUTH_URL}/login`, {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "same-origin",
    });

    // const response = await (
    //   await fetch(`${AUTH_URL}/login`, {
    //     method: "post",
    //     body: JSON.stringify(data),
    //     headers: {
    //       Accept: "application/json",
    //       "Content-Type": "application/json",
    //     },
    //   })
    // ).json();
    console.log(response);
  };

  const getProtected = async () => {
    const response = await (
      await fetch(`${AUTH_URL}/protected`, {
        method: "get",
        credentials: "same-origin",
      })
    ).json();
    console.log(response);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Email</label>
        <input type="email" name="email" ref={register} />
        <label>Password</label>
        <input type="password" name="password" ref={register} />
        <button>Login</button>
      </form>
      <button onClick={getProtected}>Protected</button>
    </>
  );
};

export default Login;
