import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
  /* align-items: center; */
  justify-content: center;
  flex-direction: column;

  background: rgba(0, 0, 0, 0.4);
  border: 0;
  border-radius: 4px;
  min-height: 360px;
  padding: 0 15px;
  color: #fff;
  margin: 0 0 15px;

  label {
    display: flex;
    align-items: center;
    /* justify-content: center; */
    align-self: center;
    flex: 1;

    cursor: pointer;

    div.preview {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      width: 100%;

      img {
        display: flex;
        flex: 1;

        max-height: 350px;
      }
    }

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      width: 100%;
      color: rgba(255, 255, 255, 0.5);

      &:hover {
        color: #fff;
      }
    }

    input {
      display: none;
    }
  }
`;
