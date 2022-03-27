import { QuestionData } from './QuestionData';

interface QuestionState {
  readonly loading: boolean;
  readonly unanswered: QuestionData[];
  readonly viewing: QuestionData | null;
  readonly searched: QuestionData[];
}

export interface AppState {
  readonly questions: QuestionState;
}

const intialQuestionState: Questionstate = {
  loading: false,
  unanswered: [],
  viewing: null,
  searched: [],
};

//Actions
//-------
//Three main processes:
//  Fetching and rendering unanswerd questions on the home page.
//  Fetching and rendering the question being viewed on the question page.
//  Searching questions and showing the matches on the search page.

//Fetching and rendering unanswerd questions on the home page:
//Process:
//  When the process starts, loading is set to true
//  The request to the server is made
//  When the response returns the data is set into unansewerd and loading is set to false.
// Two state changes => 2 actions
export const GettingUnansweredQuestions = 'GettingUnansweredQuestions';
export const GotUnansweredQuestions = 'GotUnansweredQuestions';

export const gettingUnansweredQuestions = () =>
  ({
    type: GettingUnansweredQuestions,
  } as const);

export const gotUnansweredQuestions = (questions: QuestionData[]) =>
  ({
    type: GotUnansweredQuestions,
    questions: questions,
  } as const);

//Fetching and rendering the question being viewed on the question page:
//Process:
//  When the process starts, loading is set to true
//  The request to the server is made
//  When the response returns the data is set into viewing and loading is set to false.
// Two state changes => 2 actions
export const GettingQuestion = 'GettingQuestion';
export const GotQuestion = 'GotQuestion';

export const gettingQuestion = () =>
  ({
    type: GettingQuestion,
  } as const);

export const gotQuestion = (question: QuestionData | null) =>
  ({
    type: GotQuestion,
    question: question,
  } as const);

//Searching questions and showing the matches on the search page:
//Process:
//  When the process starts, loading is set to true
//  The request to the server is made
//  When the response returns the data is set into searched and loading is set to false.
// Two state changes => 2 actions
export const SearchingQuestion = 'SearchingQuestion';
export const SearchedQuestion = 'SearchedQuestion';

export const searchingQuestion = () =>
  ({
    type: SearchingQuestion,
  } as const);

export const searchedQuestion = (searched: QuestionData[]) =>
  ({
    type: SearchedQuestion,
    searched: searched,
  } as const);

//Reducers
//-------
