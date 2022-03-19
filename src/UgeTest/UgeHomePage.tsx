/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { UgePage } from './UgePage';

export const UgeHomePage = () => {
  return (
    <div
      css={css`
        padding-top: 50px;
      `}
    >
      <UgePage></UgePage>
    </div>
  );
};
