import styled from "styled-components";

const Input = styled.input`
  width: 24rem;
  display: block;
  padding: 0 1rem;
  font-size: 0.875rem;
  font-family: inherit;
  height: 2.25rem;
  border: 1.5px solid var(--primary);
  border-radius: 0.25rem;
  transition: all 0.2s ease 0s;
  outline: none;
  -webkit-appearance: none;

  &:focus {
    box-shadow: 0 0 0 1.5px var(--primary);
    border-color: var(--primary);
  }
`;

export default Input;
