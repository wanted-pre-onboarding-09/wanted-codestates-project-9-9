/* eslint-disable react/prop-types */
import React, { useRef } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import styled from 'styled-components';
import ReviewList from '../atmoms/ReviewList';
// import ListBtn from '../atmoms/ListBtn';

const ListBox = styled.div`
  width: 100%;
  margin: 0 auto;
`;

const ViewBox = styled.div`
  position: relative;
  & div {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-auto-rows: 8rem;
    gap: 2px;
  }
  & div img {
    width: 100%;
    height: 100%;
  }
`;

const StyledButton = styled.button`
  position: fixed;
  background-color: rgba(249, 249, 249, 1);
  border-radius: 0.8rem;
  top: 82%;
  left: 57%;
  margin: 1rem;
  padding: 1rem;
  z-index: 999;

  .arrowIcon {
    color: black;
    font-size: 3rem;
  }
  &:hover {
    transform: scale(1.1);
    transition: all 300ms ease-in;
  }
`;

function ListPage({ arr }) {
  const topRef = useRef();
  const scrollToTop = () => {
    topRef.current.offsetParent.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <ListBox ref={topRef}>
      <StyledButton type="button" onClick={scrollToTop}>
        <FaArrowUp className="arrowIcon" />
      </StyledButton>
      <ViewBox>
        <ReviewList arr={arr} />
      </ViewBox>
    </ListBox>
  );
}

export default ListPage;
