/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const DetailContentWrap = styled.div`
  width: 100%;
  min-height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 20px;
  /* background: #bdbdbd; */

  > .contet-text {
    color: #020202;
    font-size: 1.2rem;
    font-weight: 500;
  }
`;

function DetailContent({ data }) {
  return (
    <DetailContentWrap>
      <div className="contet-text">{data.contents}</div>
    </DetailContentWrap>
  );
}

export default DetailContent;
