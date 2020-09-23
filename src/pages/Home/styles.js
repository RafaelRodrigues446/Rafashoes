import styled from 'styled-components';

export const Container = styled.div`

  max-width: 945px;
  width: 100%;

  display: flex;
  margin: 0px auto;
`;

export const ProductList = styled.ul`

  display: flex;
  flex-wrap: wrap;

  li {
    width: 300px;
    height: 400px;
    margin-right: 15px;
    margin-top: 15px;
    background-color: #ffffff;

    border-radius: 7px;

    display: flex;
    flex-direction: column;
    padding: 20px;

    img {
      max-width: 250px;
    }

    strong {
      font-size: 16px;
      color: #333333;
    }

    span {
      font-weight: bold;
      font-size: 18px;
      margin: 5px 0px;
    }

    button {
      background-color: #392753;
      color: #ffffff;
      border: 0;
      padding: 8px;
      text-transform: uppercase;
      font-weight: bold;
      border-radius: 5px;

      margin-top: auto;
    }
  }
`;
