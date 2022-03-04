import React from 'react';
import { useSelector } from 'react-redux';
import InfiniteList from '../molecules/InfiniteList';

function ReviewList() {
  const data = useSelector((review) => review.review.data);
  return <InfiniteList reviews={data} />;
}
export default ReviewList;
