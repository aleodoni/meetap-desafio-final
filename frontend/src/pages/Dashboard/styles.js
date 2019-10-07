import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  display: flex;

  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 60px 0 0 0;
  width: 100%;

  h1 {
    font-size: 36px;
    color: #fff;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;

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

    svg {
      margin-right: 10px;
    }

    &:hover {
      background: ${darken(0.1, '#d44059')};
    }
  }
`;
