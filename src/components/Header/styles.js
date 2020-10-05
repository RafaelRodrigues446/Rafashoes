import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`

  display: flex;
  justify-content: space-between;
`;

export const Logo = styled(Link)`
  display: flex;
  align-items: baseline;

  margin: 2% 0 0 5%;

  h1 {
    color: #ffffff;
    font-family: 'Special Elite';
    text-transform: uppercase;
    margin-right: 10px;
  }

  @media(max-width: 530px) {
    margin: 5% 0 0 5%;

    h1 {
      font-size: 25px;
    }

    img {
      height: 30px;
    }

  }
`;

export const Cart = styled(Link)`
  display: flex;
  margin: 2% 5% 0 0;


  div {
    color: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    opacity: 1;

    > span {
      font-size: 12px;
    }
  }

  svg {
    color: #ffffff;
    margin-left: 7px;
  }

  > span {
    width: 16px;
    height: 16px;
    background: #ffffff;
    border-radius: 50%;
    font-size: 12px;
    margin-left: -15px;
    margin-top: -6px;
    background: orange;
    color: #ffffff;
    font-weight: bold;

    display: flex;
    justify-content: center;
    align-items: center;

    opacity: 0;
  }

  @media(max-width: 530px) {
    margin: 5% 5% 0 0;

    div {
      opacity: 0;
    }

    >span {
      opacity: 1;
    }

    svg {
      height: 33px;
    }
  }
`;
