/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import SliderDots from '../../atmoms/SlideDots';

const DetailImgWrap = styled.div`
  position: relative;
  min-width: 100%;
  height: 626px;
  display: flex;
  justify-content: center;
  align-items: center;

  > .DetailImg {
    width: 100%;
    height: 100%;
    display: flex;
    transition: 0.3s ease-out;

    > img {
      width: 100%;
      object-fit: cover;
    }
  }
`;

function DetailImg({ data }) {
  const slideRef = useRef();
  const maxSlideIndex = data.img.length - 1;
  const flipGap = 80;
  const [currentIndex, setCurrentIndex] = useState(0);

  let slideStartX = 0;
  let slideGap = 0;
  let isSlide = false;

  useEffect(() => {
    slideRef.current.style.transform = `translateX(-${currentIndex}00%)`;
  }, [currentIndex]);

  const slideStart = (e) => {
    slideStartX = e.clientX;
    isSlide = true;
  };

  const slideMove = (e) => {
    if (isSlide) {
      slideGap = slideStartX - e.clientX;
      if (currentIndex >= maxSlideIndex && slideGap > 0) {
        slideGap = 0;
      }
    }
  };

  const slideEnd = (e) => {
    slideGap = slideStartX - e.clientX;

    if (slideGap >= flipGap) {
      if (currentIndex + 1 > maxSlideIndex) {
        setCurrentIndex(maxSlideIndex);
      } else if (currentIndex + 1 <= maxSlideIndex) {
        setCurrentIndex(currentIndex + 1);
      }
    } else if (slideGap <= -flipGap) {
      if (currentIndex - 1 < 0) {
        setCurrentIndex(0);
      } else if (currentIndex - 1 >= 0) {
        setCurrentIndex(currentIndex - 1);
      }
    }

    slideGap = 0;
    isSlide = false;
  };

  const moveSlider = (id) => {
    setCurrentIndex(id);
  };

  return (
    <DetailImgWrap role="slider">
      <div
        role="presentation"
        className="DetailImg"
        ref={slideRef}
        onDragStart={slideStart}
        onDrag={slideMove}
        onDragEnd={slideEnd}
      >
        {data.img.map((img, idx) => {
          return <img src={img} alt="없음" key={idx} />;
        })}
      </div>
      <SliderDots
        currentIndex={currentIndex}
        contentsDatas={data.img}
        moveSlider={moveSlider}
      />
    </DetailImgWrap>
  );
}

export default DetailImg;
