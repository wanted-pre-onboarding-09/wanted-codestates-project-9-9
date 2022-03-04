import React from 'react';
import styled from 'styled-components';
import { AiFillPlusCircle } from 'react-icons/ai';

function RegisterButton() {
  return <RegisterBtn />;
}

export default RegisterButton;

const RegisterBtn = styled(AiFillPlusCircle)`
  font-size: 2rem;
  margin-right: 1rem;
  cursor: pointer;
`;
