import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  max-width: 1100px;
  margin: 50px auto;
  width: 100%;

  form {
    display: flex;
    flex-direction: column;

    width: 100%;
    margin-top: 30px;

    span {
      color: #d44059;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }

    input,
    textarea {
      background: rgba(0, 0, 0, 0.2);
      border: 0;
      border-radius: 4px;
      height: 64px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 15px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.5);
      }
    }

    textarea {
      height: 10em;
      padding: 15px 15px;
    }

    div.button {
      display: flex;
      justify-content: flex-end;

      width: 100%;

      button {
        display: flex;
        align-items: center;
        justify-content: center;

        padding: 0 25px;
        margin: 5px 0 0;
        height: 60px;
        background: #d44059;
        color: #fff;
        transition: background 0.2s;
        border: 0;
        border-radius: 4px;
        font-size: 20px;

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
