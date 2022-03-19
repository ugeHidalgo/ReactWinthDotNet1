/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { PrimaryTitle } from '../Styles';

interface Props {
  title: string;
}

export const UgeTitle = ({ title }: Props) => {
  return (
    <div
      css={css`
        border-radius: 5px;
        border: 1px solid black;
        background-color: lightblue;
        padding: 10px;
        margin: 10px;
        box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.16);
      `}
    >
      <PrimaryTitle>{title}</PrimaryTitle>
    </div>
  );
};
