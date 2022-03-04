import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import PropTypes from 'prop-types';
import { changeField } from '../../../store/form/formSlice';

function ReviewInput({ content }) {
  const dispatch = useDispatch();

  const handleChangeText = (e) => {
    dispatch(changeField({ key: 'content', value: e.target.value }));
  };

  return (
    <StyledTextInput
      placeholder="리뷰 내용을 입력해 주세요."
      value={content}
      onChange={handleChangeText}
    />
  );
}

ReviewInput.propTypes = {
  content: PropTypes.string.isRequired,
};

export default ReviewInput;

const StyledTextInput = styled.textarea`
  resize: none;
  width: 100%;
  padding: 20px;
  height: 130px;
  margin: 10px 0;
  border: 1px solid #000;
  border-radius: 5px;
`;
