import React from 'react';
import { connect } from 'react-redux';

import shoes from '../../assets/shoes.svg';
import { MdShoppingBasket } from 'react-icons/md';
import { Container, Logo, Cart } from './styles';

function Header({ cartSize }) {
  return (
    <Container>
      <Logo to="/">
        <h1>Rafashoes</h1>
        <img src={shoes} alt="Logo" />
      </Logo>
      <Cart to="/cart">
        <div>
          <strong>Meu Carrinho</strong>
          <span>{cartSize} Itens</span>
        </div>
        <MdShoppingBasket size={35}/>
      </Cart>
    </Container>
  )
}

const mapStateToProps = (state) => ({
  cartSize: state.cart.length
})

export default connect(mapStateToProps)(Header);
