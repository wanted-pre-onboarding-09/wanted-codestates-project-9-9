import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ImgBox = styled.img`
  width: 100%;
  height: 100%;
`;

const ReviewList = () => {
  const data = useSelector((review) => review.review.data);

  return data.map((item, i) => (
    <Link to={`/detail/${item.postNumber}`}>
      <ImgBox key={item.postNumber} alt={i} src={item.img[0]} />
    </Link>
  ));
};

export default ReviewList;
