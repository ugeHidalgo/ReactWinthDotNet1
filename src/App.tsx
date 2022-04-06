/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { fontFamily, fontSize, gray2 } from './Styles';
import { Header } from './Header';
import { HomePage } from './HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SignInPage } from './SignInPage';
import { SearchPage } from './SearchPage';
import React from 'react';
import { NotFoundPage } from './NotFoundPage';
import { QuestionPage } from './QuestionPage';
import { UgeHomePage } from './UgeTest/UgeHomePage';
import { configureStore } from './Store';
import { Provider } from 'react-redux';
//This import is for lazy load of the AskPage
const AskPage = React.lazy(() => import('./AskPage'));
const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div
          css={css`
            font-family: ${fontFamily};
            font-size: ${fontSize};
            color: ${gray2};
          `}
        >
          <Header />
          <Routes>
            <Route path="" element={<HomePage />} />
            <Route path="search" element={<SearchPage />} />
            <Route
              path="ask"
              element={
                <React.Suspense
                  fallback={
                    <div
                      css={css`
                        margin-top: 100px;
                        text-align: canter;
                      `}
                    >
                      Loading...
                    </div>
                  }
                >
                  <AskPage />
                </React.Suspense>
              }
            />
            <Route path="signin" element={<SignInPage />} />
            <Route path="questions/:questionId" element={<QuestionPage />} />
            <Route path="ugehome" element={<UgeHomePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
