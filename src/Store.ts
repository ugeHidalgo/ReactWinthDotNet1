import { combineReducers, createStore, Store } from 'redux';
import { QuestionData } from './QuestionData';

interface QuestionsState {
  readonly loading: boolean;
  readonly unanswered: QuestionData[];
  readonly viewing: QuestionData | null;
  readonly searched: QuestionData[];
}

export interface AppState {
  readonly questions: QuestionsState;
}

const initialQuestionState: QuestionsState = {
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

export const gettingUnansweredQuestionsAction = () =>
  ({
    type: GettingUnansweredQuestions,
  } as const);

export const gotUnansweredQuestionsAction = (questions: QuestionData[]) =>
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

export const gettingQuestionAction = () =>
  ({
    type: GettingQuestion,
  } as const);

export const gotQuestionAction = (question: QuestionData | null) =>
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
export const SearchingQuestions = 'SearchingQuestions';
export const SearchedQuestions = 'SearchedQuestions';

export const searchingQuestionsAction = () =>
  ({
    type: SearchingQuestions,
  } as const);

export const searchedQuestionsAction = (searched: QuestionData[]) =>
  ({
    type: SearchedQuestions,
    searched: searched,
  } as const);

//Reducers
//-------
type QuestionsActions =
  | ReturnType<typeof gettingUnansweredQuestionsAction>
  | ReturnType<typeof gotUnansweredQuestionsAction>
  | ReturnType<typeof gettingQuestionAction>
  | ReturnType<typeof gotQuestionAction>
  | ReturnType<typeof searchingQuestionsAction>
  | ReturnType<typeof searchedQuestionsAction>;

const questionsReducer = (
  state = initialQuestionState,
  action: QuestionsActions,
) => {
  switch (action.type) {
    case GettingUnansweredQuestions: {
      return {
        ...state,
        loading: true,
      };
    }
    case GotUnansweredQuestions: {
      return {
        ...state,
        loading: false,
        unanswered: action.questions,
      };
    }
    case GettingQuestion: {
      return {
        ...state,
        loading: true,
        viewing: null,
      };
    }
    case GotQuestion: {
      return {
        ...state,
        loading: false,
        viewing: action.question,
      };
    }
    case SearchingQuestions: {
      return {
        ...state,
        loading: true,
        searched: [],
      };
    }
    case SearchedQuestions: {
      return {
        ...state,
        loading: false,
        searched: action.searched,
      };
    }
  }
  return state;
};

//Store
const rootReducer = combineReducers<AppState>({ questions: questionsReducer });

export function configureStore(): Store<AppState> {
  const store = createStore(rootReducer, undefined);
  return store;
}
