import React from 'react';

import shoes from '../../assets/tenis.jpg';
import { Container, ProductList } from './styles';

function Home() {
  return(
    <Container>
      <ProductList>
        <li>
          <img src={shoes} alt="" />
          <strong>Tênis Leve Super Confortável</strong>
          <span>R$ 399,99</span>
          <button>Adicionar ao Carrinho</button>
        </li>
        <li>
          <img src={shoes} alt="" />
          <strong>Tênis Leve Super Confortável</strong>
          <span>R$ 399,99</span>
          <button>Adicionar ao Carrinho</button>
        </li>
        <li>
          <img src={shoes} alt="" />
          <strong>Tênis Leve Super Confortável</strong>
          <span>R$ 399,99</span>
          <button>Adicionar ao Carrinho</button>
        </li>
      </ProductList>
    </Container>
  )
}

export default Home;
