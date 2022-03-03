import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import reviews from '../../data.json';

function InfiniteList() {
  const items = useRef();
  const dataIndex = useRef(20);
  const [dataList, setDataList] = useState(reviews.slice(0, 20));

  const getMoreItems = () => {
    setDataList(reviews.slice(0, dataIndex.current));
  };

  const onIntersect = ([entry]) => {
    if (entry.isIntersecting) {
      getMoreItems();
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
      {dataList.map((data) => (
        <Link to={`/detail/${data.postNumber}`}>
          <Datalist
            key={data.productId}
            data={data}
            src={data.img[0]}
            alt={data.postNumber}
          />
          <div> </div>
        </Link>
      ))}
    </DataContainer>
  );
}

const DataContainer = styled.div``;
const Datalist = styled.img``;

export default InfiniteList;
