import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import CommentForm from './CommentForm';

function RecommentItem({ recomment, handleSubmit, handleForm }) {
  const [isRecomment, setIsRecomment] = useState(false);
  const handleRecomment = () => {
    setIsRecomment(!isRecomment);
    handleForm();
  };

  return (
    <RecommentBox key={recomment.id}>
      <Recomment>
        <Commenter>{recomment.nickname}</Commenter>
        <CommentContent>{recomment.contents}</CommentContent>
        <ReBottomBox>
          <CommentDate>{recomment.date}</CommentDate>
          <AddBtn type="button" onClick={handleRecomment}>
            {isRecomment ? '답글 취소' : '답글 달기'}
          </AddBtn>
        </ReBottomBox>
      </Recomment>
      {isRecomment && (
        <CommentForm
          handleSubmit={handleSubmit}
          handleRecomment={handleRecomment}
        />
      )}
    </RecommentBox>
  );
}

export default RecommentItem;

RecommentItem.propTypes = {
  recomment: PropTypes.shape({
    id: PropTypes.number,
    nickname: PropTypes.string,
    date: PropTypes.string,
    contents: PropTypes.string,
  }).isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleForm: PropTypes.func.isRequired,
};

const RecommentBox = styled.div`
  padding: 6px 0 6px;
`;

const Recomment = styled.div`
  display: flex;
  padding-left: 45px;
  flex-direction: column;
  width: 100%;
`;

const ReBottomBox = styled.div`
  display: flex;
  margin: 6px 0;
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
