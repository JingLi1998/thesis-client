import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { AUTH_URL } from "../constants";
import { useAuthContext } from "../contexts/authContext";

const Layout = styled.section`
  padding: 1.5rem;
  padding-top: 4.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Heading = styled.h1`
  color: var(--primary);
  font-weight: 500;
  margin: 0 1rem;
`;

const Form = styled.form`
  width: 24rem;
`;

const Label = styled.label`
  display: block;
  font-size: 0.875rem;
  margin: 0.5rem;
`;

const Input = styled.input`
  margin: 0.5rem;
  display: block;
  height: 2.25rem;
  font-family: inherit;
  border-radius: 0.25rem;
  border: 1.5px solid var(--border);
  transition: all 0.2s ease 0s;
  outline: none;
  font-size: 0.875rem;
  padding: 0 1rem;
  width: 100%;
`;

const Button = styled.button`
  padding: 0.5rem;
  margin: 0.5rem;
  background: var(--primary);
  width: 100%;
  color: white;
  font-family: var(--body-font);

  &:hover {
    background: var(--primary-light);
  }
`;

const Error = styled.span`
  margin: 0.5rem;
  color: red;
`;

type FormInput = {
  email: string;
  password: string;
};

const Login = () => {
  const { user, setUser } = useAuthContext();
  const { handleSubmit, register } = useForm<FormInput>();
  const [error, setError] = useState(null);

  const history = useHistory();

  const onSubmit = async (data: FormInput) => {
    const res = await fetch(`${AUTH_URL}/login`, {
      method: "post",
      body: JSON.stringify(data),
      credentials: "same-origin",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    if (res.ok) {
      const data = await res.json();
      setUser(data);
      history.replace("/admin-query");
    } else {
      const data = await res.json();
      setError(data.message);
    }
  };

  if (user) {
    history.replace("/admin-query");
  }

  return (
    <Layout>
      <Heading>Login Page</Heading>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Label>Email</Label>
        <Input type="email" name="email" ref={register} />
        <Label>Password</Label>
        <Input type="password" name="password" ref={register} />
        <Button>Login</Button>
      </Form>
      {error && <Error>{error}</Error>}
    </Layout>
  );
};

export default Login;
