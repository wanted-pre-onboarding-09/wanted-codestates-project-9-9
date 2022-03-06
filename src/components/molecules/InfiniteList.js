import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
/* eslint react/prop-types: 0 */

function InfiniteList({ reviews }) {
  const items = useRef();
  const [check, setCheck] = useState(true);
  const dataIndex = useRef(20);
  // const [dataList, setDataList] = useState(reviews.slice(0, 20));
  // const test = reviews;
  // const getMoreItems = () => {
  //   setDataList(reviews.slice(0, dataIndex.current));
  // };
  const onIntersect = ([entry]) => {
    if (entry.isIntersecting && entry.boundingClientRect.y > 0) {
      // getMoreItems();
      setCheck(!check);
      dataIndex.current += 20;
    }
  };

  useEffect(() => {
    let observer;
    const target = items.current.lastChild;
    if (target) {
      observer = new IntersectionObserver(onIntersect, {
        thredhold: 0.5,
      });
      observer.observe(target);
    }

    return () => observer && observer.disconnect();
  });

  return (
    <DataContainer ref={items}>
      {reviews.slice(0, dataIndex.current).map((data) => (
        <Link to={`/detail/${data.postNumber}`}>
          <Datalist
            key={data.postNumber}
            data={data}
            src={data.img[0]}
            alt="리뷰 사진"
          />
        </Link>
      ))}
    </DataContainer>
  );
}

const DataContainer = styled.div``;
const Datalist = styled.img``;

export default InfiniteList;
