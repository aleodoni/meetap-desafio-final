import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100%;
  width: 100%;
  background-image: linear-gradient(#25212e, #402744);
`;

export const Content = styled.div`
  width: 100%;
  max-width: 415px;
  text-align: center;

  form {
    display: flex;
    justify-content: center;
    flex-direction: column;

    margin-top: 30px;

    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 64px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    span {
      color: #d44059;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }

    button {
      margin: 5px 0 0;
      height: 64px;
      background: #d44059;
      color: #fff;
      transition: background 0.2s;
      border: 0;
      border-radius: 4px;
      font-size: 24px;

      &:hover {
        background: ${darken(0.1, '#d44059')};
      }
    }

    a {
      color: #fff;
      margin-top: 15px;
      font-size: 24px;
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }
    }
  }
`;
