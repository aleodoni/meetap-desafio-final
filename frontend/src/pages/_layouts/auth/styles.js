import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  height: 100%;
  width: 100%;
  background-image: linear-gradient(#25212e, #402744);

  form {
    display: flex;
    /* align-items: center; */
    justify-content: center;
    flex-direction: column;
  }

  button {
    background-color: #d44059;
    color: #fff;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.1, '#d44059')};
    }
  }

  .logo {
    height: 120px;
  }
`;
