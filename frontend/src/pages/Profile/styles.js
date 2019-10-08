import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 1100px;
  margin: 50px auto;
  width: 100%;

  form {
    display: flex;
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

    hr {
      border: 0;
      height: 1px;
      background: rgba(255, 255, 255, 0.2);
      margin: 10px 0 20px;
    }

    div {
      display: flex;
      justify-content: flex-end;

      width: 100%;

      button {
        display: flex;
        align-items: center;
        justify-content: center;

        width: 250px;
        margin: 5px 0 0;
        height: 64px;
        background: #d44059;
        color: #fff;
        transition: background 0.2s;
        border: 0;
        border-radius: 4px;
        font-size: 24px;

        svg {
          margin-right: 10px;
        }

        &:hover {
          background: ${darken(0.1, '#d44059')};
        }
      }
    }
  }
`;
