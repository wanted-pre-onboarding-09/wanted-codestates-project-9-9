import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const DotList = styled.ul`
  position: absolute;
  top: 95%;
  /* left: 0; */
  display: flex;
  justify-content: center;
  z-index: 100;
  width: 100%;
  background: transparent;
`;

const DotItem = styled.li`
  margin: 0 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
`;

const DotBtn = styled.button`
  width: 10px;
  height: 10px;
  padding: 5px;
  border-radius: 50%;
  background-color: ${(props) => (props.active ? 'white' : 'gray')};
  border: none;
`;

function SliderDots({ curIndex, contentsDatas, moveSlider }) {
  const sliderDatas = contentsDatas.map((data, index) => ({
    index_id: index,
  }));

  return (
    <DotList>
      {sliderDatas.map((data) => (
        <DotItem key={data.idex_id}>
          <DotBtn
            active={curIndex === data.index_id}
            onClick={() => moveSlider(data.index_id)}
          />
        </DotItem>
      ))}
    </DotList>
  );
}

export default SliderDots;

SliderDots.propTypes = {
  contentsDatas: PropTypes.arrayOf(
    PropTypes.shape({
      body: null || PropTypes.string,
      id: PropTypes.number,
      image: PropTypes.string,
      like_cnt: PropTypes.number,
      like_top: PropTypes.number,
      link: PropTypes.string,
      sector_id: PropTypes.number,
      title: PropTypes.string,
      upload_date: PropTypes.string,
    }),
  ).isRequired,
  curIndex: PropTypes.number.isRequired,
  moveSlider: PropTypes.func.isRequired,
};
