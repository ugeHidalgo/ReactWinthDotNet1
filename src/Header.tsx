import React from 'react';
import { UserIcon } from './Icons';

//Function-based component with implicit return
export const Header = () => (
  <div>
    <a href="./">Q & A</a>
    <input type="text" placeholder="Search..." />
    <a href="./signin">
      <UserIcon />
      <span>Sign In</span>
    </a>
  </div>
);
