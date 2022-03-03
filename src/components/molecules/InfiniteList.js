import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import mock from '../../data/mockdata.json';

function InfiniteList() {
  const items = useRef();
  const dataIndex = useRef(10);
  const [itemList, setItemList] = useState(mock.slice(0, 10));

  const getMoreItems = () => {
    setItemList(mock.slice(0, dataIndex.current));
  };

  const onIntersect = ([entry]) => {
    if (entry.isIntersecting) {
      getMoreItems();
      dataIndex.current += 10;
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
    <StyledContainer>
      <TargetItem ref={items}>
        {itemList.map((item, index) => (
          <div key={item.productId}>
            <img src={item.image[0]} alt={item.productId} />
            <li>{index}</li>
          </div>
        ))}
      </TargetItem>
    </StyledContainer>
  );
}
const StyledContainer = styled.div``;

const TargetItem = styled.ul``;

export default InfiniteList;
