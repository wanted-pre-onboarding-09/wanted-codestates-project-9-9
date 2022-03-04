import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import CommentForm from './CommentForm';
import { addRecomment } from '../../store/review/reviewSlice';
import RecommentItem from './RecommentItem';

function CommentItem({ comment, handleForm, review }) {
  const [isComment, setIsComment] = useState(false);

  const handleComment = () => {
    setIsComment(!isComment);
    handleForm();
  };

  const dispatch = useDispatch();

  const handleRecommentSubmit = (newRecomment) => {
    dispatch(
      addRecomment({
        postNumber: review.postNumber,
        commentId: comment.id,
        newRecomment,
      }),
    );
    setIsComment(false);
    // setIsRecomment(false);
    handleForm();
    // handleRecomment();
    // handleComment();
  };

  return (
    <CommentBox>
      <Commenter>{comment.nickname}</Commenter>
      <CommentContent>{comment.contents}</CommentContent>
      <BottomBox>
        <CommentDate>{comment.date}</CommentDate>
        <AddBtn type="button" onClick={handleComment}>
          {isComment ? '답글 취소' : '답글 달기'}
        </AddBtn>
      </BottomBox>
      {comment.recomment && (
        <>
          {comment.recomment.map((recomment) => (
            <RecommentItem
              key={recomment.id}
              recomment={recomment}
              handleSubmit={handleRecommentSubmit}
              handleForm={handleForm}
            />
          ))}
        </>
      )}
      {isComment && <CommentForm handleSubmit={handleRecommentSubmit} />}
    </CommentBox>
  );
}

export default CommentItem;

CommentItem.propTypes = {
  comment: PropTypes.shape({
    id: PropTypes.number,
    nickname: PropTypes.string,
    date: PropTypes.string,
    contents: PropTypes.string,
    recomment: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        nickname: PropTypes.string,
        date: PropTypes.string,
        contents: PropTypes.string,
      }),
    ),
  }).isRequired,
  review: PropTypes.shape({
    postNumber: PropTypes.number,
    nickName: PropTypes.string,
    contents: PropTypes.string,
    date: PropTypes.string,
    reviewSize: PropTypes.arrayOf(
      PropTypes.shape({
        txt: PropTypes.string,
        title: PropTypes.string,
      }),
    ),
    img: PropTypes.arrayOf(PropTypes.string),
    like: PropTypes.number,
    rating: PropTypes.string,
    deliveryDay: PropTypes.number,
    comments: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        nickname: PropTypes.string,
        date: PropTypes.string,
        contents: PropTypes.string,
        recomment: PropTypes.arrayOf(
          PropTypes.shape({
            id: PropTypes.number,
            nickname: PropTypes.string,
            date: PropTypes.string,
            contents: PropTypes.string,
          }),
        ),
      }),
    ),
  }).isRequired,
  handleForm: PropTypes.func.isRequired,
};

const CommentBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 18px;
  background-color: #f9f9f9;
`;

const Commenter = styled.span`
  color: ${(props) => props.color};
  font-size: 20px;
  font-weight: 600;
  margin-right: 10px;
`;

const CommentContent = styled.span`
  font-size: 18px;
  font-weight: 500;
`;

const BottomBox = styled.div`
  display: flex;
  margin: 6px 0;
`;

const CommentDate = styled.p`
  font-size: 15px;
  font-weight: 500;
  color: #999999;
`;

const AddBtn = styled.button`
  margin-left: 20px;
  font-size: 15px;
  font-weight: 500;
  color: #999999;
  background-color: transparent;
  border: none;
`;
