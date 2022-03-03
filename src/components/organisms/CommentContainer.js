import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import CommentItem from '../molecules/CommentItem';
import CommentForm from '../molecules/CommentForm';
import { addComment } from '../../store/review/reviewSlice';

function CommentContainer({ review }) {
  const [isForm, setIsForm] = useState(true);
  const dispatch = useDispatch();
  const handleForm = () => {
    setIsForm(!isForm);
  };
  const handleCommentSubmit = (newComment) => {
    dispatch(addComment({ postNumber: review.postNumber, newComment }));
  };
  return (
    <CommentsBox>
      {review.comments.map((comment) => (
        <CommentItem
          key={comment.id}
          comment={comment}
          handleForm={handleForm}
          review={review}
        />
      ))}
      {isForm && <CommentForm handleSubmit={handleCommentSubmit} />}
    </CommentsBox>
  );
}

export default CommentContainer;

CommentContainer.propTypes = {
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
};

const CommentsBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #f9f9f9;
`;
