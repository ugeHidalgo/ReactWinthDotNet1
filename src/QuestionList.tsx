import React from 'react';
import { Question } from './Question';
import { QuestionData } from './QuestionData';

interface Props {
  data: QuestionData[];
  renderItem?: (item: QuestionData) => JSX.Element;
}

export const QuestionList = ({ data, renderItem }: Props) => (
  <div>
    <ul>
      {data.map((question) => (
        <li key={question.questionId}>
          {renderItem ? renderItem(question) : <Question data={question} />}
        </li>
      ))}
    </ul>
  </div>
);
