/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import SliderDots from '../../atmoms/SlideDots';

const DetailImgWrap = styled.div`
  position: relative;
  width: 100%;
  height: 626px;
  display: flex;
  justify-content: center;
  align-items: center;

  > .DetailImg {
    width: 100%;
    height: 100%;
    display: flex;

    > img {
      width: 100%;
      object-fit: cover;
    }
  }
`;

function DetailImg({ data }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);
  const maxSlideIndex = data.img.length - 1;

  const prevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(maxSlideIndex);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const nextSlide = () => {
    if (currentSlide >= maxSlideIndex) {
      setCurrentSlide(0); // 마지막 슬라이드의 경우에 슬라이드 인덱스를 초기화
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  useEffect(() => {
    slideRef.current.style.transition = 'all 0.5s ease-in-out';
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
  }, [currentSlide]);

  let startX;
  let endX;

  const onTouchStart = (event) => {
    startX = event.touches[0].pageX;
  };
  const onTouchEnd = (event) => {
    endX = event.changedTouches[0].pageX;
    if (startX > endX) {
      nextSlide();
    } else {
      prevSlide();
    }
  };

  return (
    <DetailImgWrap>
      <div
        className="DetailImg"
        ref={slideRef}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {data.img.map((img, idx) => {
          return <img src={img} alt="없음" key={idx} />;
        })}
      </div>
      <SliderDots
        curIndex={currentSlide}
        contentsDatas={data.img}
        moveSlider={nextSlide}
      />
    </DetailImgWrap>
  );
}

export default DetailImg;
