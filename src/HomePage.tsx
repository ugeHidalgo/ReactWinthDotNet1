/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useState } from 'react';
import { CheckBox } from './CheckBox';
import { Page } from './Page';
import { PageTitle } from './PageTitle';
import { getUnansweredQuestions, QuestionData } from './QuestionData';
import { QuestionList } from './QuestionList';
import { PrimaryButton } from './Styles';

export const HomePage = () => {
  const [questions, setQuestions] = useState<QuestionData[]>([]);
  const [questionsLoading, setQuestionsLoading] = useState(true);

  const clickQuestionButton = () => {
    console.log('Changing button state.');
  };

  React.useEffect(() => {
    const doGetUnansweredQuestions = async () => {
      console.log('Getting unanswered questions');
      const unAnsweredQuestions = await getUnansweredQuestions();
      setQuestions(unAnsweredQuestions);
      setQuestionsLoading(false);
      console.log('Initializing button state.');
    };
    doGetUnansweredQuestions();
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
          <PrimaryButton onClick={clickQuestionButton}>
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
