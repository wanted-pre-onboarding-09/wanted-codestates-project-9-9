import React, { useRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function CommentForm({ handleSubmit, handleRecomment }) {
  const commentRef = useRef();

  const onSubmit = () => {
    const newComment = {
      id: Date.now(),
      nickname: 'wanted',
      contents: commentRef.current.value,
      date: '지금',
      recomment: [],
    };
    handleSubmit(newComment);
    handleRecomment();
    commentRef.current.value = '';
  };

  const onKeyPress = (event) => {
    if (event.key === 'Enter') {
      onSubmit();
    }
  };

  return (
    <CommentInput>
      <InputBox
        type="text"
        placeholder="wanted(으)로 답글 달기"
        ref={commentRef}
        onKeyPress={onKeyPress}
      />
      <PostBtn type="button" onClick={onSubmit}>
        게시
      </PostBtn>
    </CommentInput>
  );
}

export default CommentForm;

CommentForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleRecomment: PropTypes.func,
};

CommentForm.defaultProps = {
  handleRecomment: () => {},
};

const CommentInput = styled.div`
  display: flex;
  width: 450px;
  height: 66px;
  margin: auto;
  border-radius: 30px;
  border: 1px solid #d3d0d0;
  background-color: #fff;
`;

const InputBox = styled.input`
  width: 100%;
  padding: 15px 15px 15px 30px;
  border: none;
  font-size: 20px;
  font-weight: 500;
  background-color: transparent;
  &:focus {
    outline: none;
  }
`;

const PostBtn = styled.button`
  width: 90px;
  padding: 15px 30px 15px 15px;
  border: none;
  font-size: 20px;
  font-weight: 500;
  color: #333;
  background-color: transparent;
`;
