/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const UgeFooter = () => {
  return (
    <footer
      css={css`
        padding: 50px 0;
        color: #f0f9ff;
        background-color: #282d32;
      `}
    >
      <div>
        <div className="col item social">
          <a href="https://www.facebook.com/UgeHidalgo/">
            <i className="icon ion-social-facebook"></i>
          </a>
          <a href="#">
            <i className="icon ion-social-twitter"></i>
          </a>
          <a href="https://www.instagram.com/ugehidalgo/">
            <i className="icon ion-social-instagram"></i>
          </a>
        </div>
        <p className="copyright">Uge Hidalgo © 2022</p>
      </div>
    </footer>
  );
};
