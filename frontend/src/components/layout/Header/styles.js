import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  background: rgba(0, 0, 0, 0.4);
  padding: 0 30px;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 100px;
  max-width: 1100px;
  margin: 0 auto;

  nav {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  justify-items: center;

  color: #fff;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;

    height: 100%;

    a {
      color: #999;
    }
  }

  button {
    display: flex;
    align-content: center;

    margin-left: 40px;
    padding-left: 25px;
    padding-right: 25px;
    height: 50px;
    background: #d44059;
    color: #fff;
    transition: background 0.2s;
    border: 0;
    border-radius: 4px;
    font-size: 20px;
    font-weight: bold;

    &:hover {
      background: ${darken(0.1, '#d44059')};
    }
  }
`;
