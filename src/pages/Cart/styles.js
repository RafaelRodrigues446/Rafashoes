import styled from 'styled-components';

export const Container = styled.div`

  width: 100%;
  max-width: 940px;
  min-height: 150px;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  padding: 20px;
  margin: 0 auto;
  border-radius: 15px;
`;

export const Table = styled.table`

  width: 100%;

  thead th {
    text-transform: uppercase;
    font-size: 14px;
    color: #b2bec3;
  }

  tbody tr td {
    border-bottom: 1px solid #eeeeee;
  }

  img {
    width: 120px;
  }

  strong {
    display: block;
    font-size: 16px;
    color: #333333;
  }

  span {
    font-size: 15px;
    font-weight: bold;
  }

  button {
    background: none;
    border: 0;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;

    input {
      max-width: 50px;
      margin: 0 5px;
    }
  }
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 20px;

  button {
    padding: 10px;
    border: 0;
    background-color: #5C4082;
    color: #ffffff;
    border-radius: 5px;
    font-weight: bold;

  }

  div span {
    font-size: 12px;
    font-weight: bold;
    color: #b2bec3;
    margin-right: 3px;
  }

  div strong {
    font-size: 20px;
    color: #333333;
  }
`;

export const CarrinhoVazio = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;

  h3 {
    color: #333333;
  }

  svg {
    color: #5C4082;
  }

  a {
    padding: 15px;
    border: 0;
    background: #5C4082;
    color: #ffffff;
    border-radius: 5px;
    font-weight: bold;

    margin-top: 15px;

  }
`;
