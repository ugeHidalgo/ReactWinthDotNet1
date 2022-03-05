/** @jsxImportSource @emotion/react */
import React from 'react';
import { PrimaryTitle } from './Styles';

interface Props {
  children: React.ReactNode;
}

export const PageTitle = ({ children }: Props) => (
  <PrimaryTitle>{children}</PrimaryTitle>
);
