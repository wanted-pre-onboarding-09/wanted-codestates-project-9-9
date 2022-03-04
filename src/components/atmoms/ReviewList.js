import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const ImgBox = styled.img`
  width: 100%;
  height: 100%;
`;

const ReviewList = () => {
  const data = useSelector((review) => review.review.data);
  console.log(data);

  return data.map((item, i) => <ImgBox alt={i} src={item.img[0]} />);
};

export default ReviewList;
