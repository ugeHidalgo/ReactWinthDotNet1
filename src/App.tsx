/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { fontFamily, fontSize, gray2 } from './Styles';
import { Header } from './Header';
import { HomePage } from './HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SignInPage } from './SignInPage';
import { SearchPage } from './SearchPage';
import { AskPage } from './AskPage';
import { NotFoundPage } from './NotFoundPage';

function App() {
  return (
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
          <Route path="ask" element={<AskPage />} />
          <Route path="signin" element={<SignInPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
