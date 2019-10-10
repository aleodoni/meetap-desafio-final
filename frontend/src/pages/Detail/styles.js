import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  display: flex;

  max-width: 1100px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  width: 100%;
`;

export const Meetup = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  flex-direction: column;

  width: 100%;
  height: 100%;

  img {
    margin-top: 60px;
    margin-bottom: 40px;
    border-radius: 4px;
    width: 100%;
    max-height: 400px;
  }

  span {
    font-size: 24px;
    color: #fff;
    line-height: 40px;
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

  span {
    display: flex;
    align-items: center;
  }

  button.cancelar {
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

  button.editar {
    display: flex;
    align-items: center;
    justify-content: center;

    margin-right: 20px;
    padding-left: 25px;
    padding-right: 25px;
    height: 50px;
    background: #4dbaf9;
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
      background: ${darken(0.1, '#4dbaf9')};
    }
  }
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: center; */

  width: 100%;
  color: #fff;
  opacity: 0.6;

  margin-top: 30px;

  svg {
    margin-right: 10px;
  }

  span {
    align-self: center;
    align-items: center;
    justify-content: center;

    font-size: 20px;
    margin-right: 50px;
  }
`;
