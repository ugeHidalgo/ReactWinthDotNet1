import { check } from 'prettier';
import React, { useEffect, useState } from 'react';
import { CheckBox } from './CheckBox';
import { Page } from './Page';
import { PageTitle } from './PageTitle';
import { getUnansweredQuestions, QuestionData } from './QuestionData';
import { QuestionList } from './QuestionList';

export const HomePage = () => {
  const [questions, setQuestions] = useState<QuestionData[]>([]);
  const [questionsLoading, setQuestionsLoading] = useState(true);
  const [buttonState, setButtonState] = useState(false);

  const clickQuestionButton = () => {
    console.log('Changing button state.');
    setButtonState(!buttonState);
  };

  React.useEffect(() => {
    const doGetUnansweredQuestions = async () => {
      console.log('Getting unansweredqeustions');
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
        <div>
          <PageTitle>Unanswered questions</PageTitle>
          <button onClick={clickQuestionButton}>Ask a question</button>
          <CheckBox label="My checkbox" value={buttonState} />
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
