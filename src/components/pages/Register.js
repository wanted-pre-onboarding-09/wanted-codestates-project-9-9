import React from 'react';
import styled from 'styled-components';
import RegisterHeader from '../molecules/register/RegisterHeader';
import RegisterForm from '../organisms/register/RegisterForm';

function Register() {
  return (
    <Container>
      <RegisterHeader />
      <RegisterForm />
    </Container>
  );
}

export default Register;

const Container = styled.div`
  padding: 1rem;
`;
