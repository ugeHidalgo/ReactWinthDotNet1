/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useSearchParams } from 'react-router-dom';
import { QuestionList } from './QuestionList';
import { searchQuestions, QuestionData } from './QuestionData';
import { Page } from './Page';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  AppState,
  searchingQuestionsAction,
  searchedQuestionsAction,
  gettingQuestionAction,
} from './Store';

export const SearchPage = () => {
  //Destructure search params
  const [searchParams] = useSearchParams();

  //State to hold matched questions
  //Without Redux
  //const [questions, setQuestions] = React.useState<QuestionData[]>([]);
  //With Redux
  const dispatch = useDispatch();
  const questions = useSelector((state: AppState) => state.questions.searched);

  //Getting the query parameter 'criteria'
  const search = searchParams.get('criteria') || '';

  //Invoke the search when the component is rendered the first time and every change o the search variable
  React.useEffect(() => {
    const doSearch = async (criteria: string) => {
      //With redux
      dispatch(gettingQuestionAction());
      const foundResults = await searchQuestions(criteria);
      //Without redux
      //setQuestions(foundResults);
      //With redux
      dispatch(searchedQuestionsAction(foundResults));
      console.log(`Found ${foundResults.length} coincidences.`);
    };
    doSearch(search);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);
  return (
    <Page title="Search results">
      {search && (
        <p
          css={css`
            font-size: 16px;
            font-style: italic;
            margin-top: 0px;
          `}
        >
          for "{search}"
        </p>
      )}
      <QuestionList data={questions} />
    </Page>
  );
};
