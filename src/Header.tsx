/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Link, useSearchParams } from 'react-router-dom';
import { UserIcon } from './Icons';
import {
  fontFamily,
  fontSize,
  gray1,
  gray2,
  gray5,
  textColor1,
} from './Styles';

//For React-hook-form use
interface IFormData {
  search: string;
}

//Function-based component with implicit return
export const Header = () => {
  const [searchParams] = useSearchParams();
  const criteria = searchParams.get('criteria') || '';

  const { register, handleSubmit } = useForm<IFormData>();
  const onSubmit: SubmitHandler<IFormData> = (data) => {
    console.log(data);
  };

  return (
    <div
      css={css`
        position: fixed;
        box-sizing: border-box;
        top: 0;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px 20px;
        background-color: #fff;
        border-bottom: 1px solid ${gray5};
        box-shadow: 0 3px 7px 0 rgba(110, 112, 114, 0.21);
      `}
    >
      <Link
        to="/"
        css={css`
          font-size: 24px;
          font-weight: bold;
          color: ${gray1};
          text-decoration: none;
        `}
      >
        Q & A{' '}
      </Link>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register('search')}
          type="text"
          placeholder="Search..."
          defaultValue={criteria}
          css={css`
            ::placeholder {
              color: ${textColor1};
            }
            box-sizing: border-box;
            font-family: ${fontFamily};
            font-size: ${fontSize};
            padding: 8px 10px;
            border: 1px solid ${gray5};
            border-radius: 3px;
            color: ${gray2};
            background-color: white;
            width: 200px;
            height: 30px;
            :focus {
              outline-color: ${gray5};
            }
          `}
        />
      </form>
      <Link
        to="/signin"
        css={css`
          font-family: ${fontFamily};
          font-size: ${fontSize};
          padding: 5px 10px;
          background-color: transparent;
          color: ${gray2};
          text-decoration: none;
          cursor: pointer;
          :focus {
            outline-color: ${gray5};
          }
        `}
      >
        <UserIcon />
        <span
          css={css`
            margin-left: 7px;
          `}
        >
          Sign In
        </span>
      </Link>
    </div>
  );
};
