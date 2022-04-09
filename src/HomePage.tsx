/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckBox } from './CheckBox';
import { Page } from './Page';
import { PageTitle } from './PageTitle';
import { getUnansweredQuestions } from './QuestionData';
import { QuestionList } from './QuestionList';
import { PrimaryButton } from './Styles';
import { useSelector, useDispatch } from 'react-redux';
import {
  gettingUnansweredQuestionsAction,
  gotUnansweredQuestionsAction,
  AppState,
} from './Store';

export const HomePage = () => {
  const dispatch = useDispatch();
  const questions = useSelector(
    (state: AppState) => state.questions.unanswered,
  );
  const questionsLoading = useSelector(
    (state: AppState) => state.questions.loading,
  );

  const navigate = useNavigate();
  const handleAskQuestionClick = () => {
    console.log('Navigation to ask page.');
    navigate('ask');
  };

  React.useEffect(() => {
    const doGetUnansweredQuestions = async () => {
      console.log('Getting unanswered questions');
      dispatch(gettingUnansweredQuestionsAction());
      const unAnsweredQuestions = await getUnansweredQuestions();
      dispatch(gotUnansweredQuestionsAction(unAnsweredQuestions));
      console.log('Initializing button state.');
    };
    doGetUnansweredQuestions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <Page>
        <div
          css={css`
            display: flex;
            align-items: center;
            justify-content: space-between;
          `}
        >
          <PageTitle>Unanswered questions</PageTitle>
          <PrimaryButton onClick={handleAskQuestionClick}>
            Ask a question
          </PrimaryButton>
          <CheckBox label="My checkbox" />
        </div>
        {questionsLoading ? (
          <div>Loading...</div>
        ) : (
          <QuestionList data={questions || []} />
        )}
      </Page>
    </div>
  );
};
