import React from 'react';
import styled from 'styled-components';
import dummyData from '../../../dummy/dummyData';

const DetailImgWrap = styled.div`
  width: 100%;
  height: 626px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #bdbdbd;
  > .DetailImg {
    width: 100%;
    height: 100%;

    > img {
      width: 100%;
    }
  }
`;

function DetailImg() {
  const { image } = dummyData[0];
  return (
    <DetailImgWrap>
      <div className="DetailImg">
        <img src={image[0]} alt="없음" />
      </div>
    </DetailImgWrap>
  );
}

export default DetailImg;
