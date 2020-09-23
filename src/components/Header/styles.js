import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`

  display: flex;
  justify-content: space-between;
  padding: 2% 5%;
`;

export const Logo = styled(Link)`
  display: flex;
  align-items: baseline;

  h1 {
    color: #ffffff;
    font-family: 'Special Elite';
    text-transform: uppercase;
    margin-right: 10px;
  }
`;

export const Cart = styled(Link)`
  display: flex;

  div {
    color: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    span {
      font-size: 12px;
    }
  }

  svg {
    color: #ffffff;
    margin-left: 7px;
  }
`;
