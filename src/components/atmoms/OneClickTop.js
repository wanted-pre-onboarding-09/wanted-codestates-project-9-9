import React from 'react';
import styled from 'styled-components';
import { FaChevronUp } from 'react-icons/fa';

const OneClickTopBtnWrap = styled.div`
  min-width: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-height: 2rem;
  border: 1px solid #bdbdbd;
  position: fixed;
  top: 90%;
  left: 57%;
  cursor: pointer;
  border-radius: 20%;
`;

function OneClickTop() {
  const scrollTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <OneClickTopBtnWrap onClick={scrollTop}>
      <FaChevronUp />
    </OneClickTopBtnWrap>
  );
}

export default OneClickTop;
