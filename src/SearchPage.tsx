/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useSearchParams } from 'react-router-dom';
import { QuestionList } from './QuestionList';
import { searchQuestions, QuestionData } from './QuestionData';
import { Page } from './Page';
import React from 'react';
import { fontSize } from './Styles';

export const SearchPage = () => {
  //Destructure search params
  const [searchParams] = useSearchParams();

  //State to hold matched questions
  const [questions, setQuestions] = React.useState<QuestionData[]>([]);

  //Getting the query parameter 'criteria'
  const search = searchParams.get('criteria') || '';

  //Invoke the search when the component is rendered the first time and every change o the search variable
  React.useEffect(() => {
    const doSearch = async (criteria: string) => {
      const foundResults = await searchQuestions(criteria);
      setQuestions(foundResults);
      console.log(`Found ${foundResults.length} coincidences.`);
    };
    doSearch(search);
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
