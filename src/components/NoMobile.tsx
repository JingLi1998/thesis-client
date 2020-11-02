import React from "react";
import styled from "styled-components";
import { breakpoints } from "../styles";

const Wrapper = styled.div`
  display: block;
  z-index: 10;

  ${breakpoints.lg} {
    display: none;
  }
`;

const Overlay = styled.div`
  display: block;
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`;

const Message = styled.div`
  background: white;
  width: 28rem;
  height: 12rem;
  border-radius: 5px;
  padding: 1rem;
  position: fixed;
  margin: auto;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  color: var(--primary);
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-weight: 600;
  text-align: center;
  font-size: 1.25rem;
  line-height: 1.5rem;
`;

const NoMobile = () => (
  <Wrapper>
    <Overlay />
    <Message>Please use this website on a fullscreen desktop browser</Message>
  </Wrapper>
);

export default NoMobile;
