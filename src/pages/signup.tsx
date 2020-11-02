import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { AUTH_URL } from "../constants";
import { useAuthContext } from "../contexts/authContext";

const Layout = styled.section`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 4.5rem;
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

type FormInput = {
  email: string;
  password: string;
  confirmPassword: string;
};

const Signup = () => {
  const { user, setUser } = useAuthContext();
  const { handleSubmit, register } = useForm<FormInput>();

  const history = useHistory();

  const onSubmit = async (data: FormInput) => {
    if (data.password !== data.confirmPassword) {
      return alert("Passwords do not match");
    }
    const response = await fetch(`${AUTH_URL}/signup`, {
      method: "post",
      body: JSON.stringify({
        email: data.email,
        password: data.password,
      }),
      credentials: "same-origin",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      const user = response.json();
      setUser(user);
      history.replace("/admin-query");
    }
  };

  if (user) {
    history.replace("/admin-query");
  }

  return (
    <Layout>
      <Heading>Signup Page</Heading>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Label>Email</Label>
        <Input type="email" name="email" ref={register} />
        <Label>Password</Label>
        <Input type="password" name="password" ref={register} />
        <Label>Confirm Password</Label>
        <Input type="password" name="confirmPassword" ref={register} />
        <Button>Signup</Button>
      </Form>
    </Layout>
  );
};

export default Signup;
