import React from 'react';
import { UserIcon } from './Icons';

//Function-based component with implicit return
export const Header = () => {
  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.value);
  };
  return (
    <div>
      <a href="./">Q & A </a>
      <input
        type="text"
        placeholder="Search..."
        onChange={handleSearchInputChange}
      />
      <a href="./signin">
        <UserIcon />
        <span>Sign In</span>
      </a>
    </div>
  );
};
