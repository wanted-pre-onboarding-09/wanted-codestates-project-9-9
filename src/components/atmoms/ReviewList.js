import React from 'react';
import InfiniteList from '../molecules/InfiniteList';

function ReviewList({ arr }) {
  return <InfiniteList reviews={arr} />;
}

export default ReviewList;
