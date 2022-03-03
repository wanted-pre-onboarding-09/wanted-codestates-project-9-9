import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import gridIcon from '../../assets/gridIcon.png';
import detailIcon from '../../assets/detailIcon.png';
// import dummyData from '../../dummy/dummyData';
import data from '../../data.json';

const ListBox = styled.div`
  width: 500px;
  margin: 0 auto;
  border: 1px solid black;
`;

const BtnBox = styled.div`
  display: flex;
  width: 100%;
  font-size: 2rem;
`;

const ChangeBtn = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;
  height: 4rem;
  align-items: center;
  opacity: 0.5;
`;

const IconBox = styled.img`
  width: 2rem;
  height: 2rem;
`;

const ViewBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: 8rem;
  gap: 2px;
`;
// const Box = styled.div`
//   width: 100%;
//   height: 100%;
//   overflow: overlay;
// `;
const ImgBox = styled.img`
  width: 100%;
  height: 100%;
`;

function ListPage() {
  const [changeList, setChangeList] = useState('grid');
  const [list, setList] = useState([]);

  useEffect(() => {
    document.querySelector('#grid').style.opacity = '1';
    document.querySelector('#grid').style.borderBottom = '3px solid black';
  }, []);

  useEffect(() => {
    if (changeList === 'grid') {
      const gridList = data.map((item, i) => (
        <ImgBox alt={i} src={item.img[0]} />
      ));

      setList(gridList);
    } else {
      // const gridList = testList.map((item) => (
      //   <Box>
      //     {item}
      //     <div>상세페이지</div>
      //   </Box>
      // ));
      // setList(gridList);
      return {};
    }
  }, [changeList]);
  const ChangBtn = (event) => {
    const gridBtn = document.querySelector('#grid');
    const detailBtn = document.querySelector('#detail');
    // event.stopPropagation();
    if (event.target.id === 'grid') {
      gridBtn.style.opacity = '1';
      gridBtn.style.borderBottom = '3px solid black';
      detailBtn.style.opacity = '0.3';
      detailBtn.style.borderBottom = '1px solid black';
      setChangeList('grid');
    } else if (event.target.id === 'detail') {
      detailBtn.style.opacity = '1';
      detailBtn.style.borderBottom = '3px solid black';
      gridBtn.style.opacity = '0.3';
      gridBtn.style.borderBottom = '1px solid black';
      setChangeList('detail');
    }
  };

  return (
    <ListBox>
      <BtnBox>
        <ChangeBtn id="grid" onClick={ChangBtn}>
          <IconBox alt='"grid"' src={gridIcon} />
        </ChangeBtn>
        <ChangeBtn id="detail" onClick={ChangBtn}>
          <IconBox alt='"detail"' src={detailIcon} />
        </ChangeBtn>
      </BtnBox>

      <ViewBox>{list}</ViewBox>
    </ListBox>
  );
}

export default ListPage;
