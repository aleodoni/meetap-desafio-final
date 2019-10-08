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
  flex-direction: column;

  width: 100%;

  ul {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 10px;
    margin-top: 30px;
  }
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

export const Meetup = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 20px;
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.2);

  strong {
    color: #fff;
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgba(255, 255, 255, 0.6);

    svg {
      margin-left: 20px;
    }
  }

  button {
    border: 0;
    background: none;
  }
`;
