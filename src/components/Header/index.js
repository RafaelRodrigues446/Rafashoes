import React from 'react';

import shoes from '../../assets/shoes.svg';
import { MdShoppingBasket } from 'react-icons/md';
import { Container, Logo, Cart } from './styles';

function Header() {
  return (
    <Container>
      <Logo to="/">
        <h1>Rafashoes</h1>
        <img src={shoes} alt="Logo" />
      </Logo>
      <Cart to="/cart">
        <div>
          <strong>Meu Carrinho</strong>
          <span>3 Itens</span>
        </div>
        <MdShoppingBasket size={35}/>
      </Cart>
    </Container>
  )
}

export default Header;
