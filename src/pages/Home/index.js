import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import api from '../../services/api';

import { Container, ProductList } from './styles';

function Home({ dispatch }) {

  const [ products, setProduts ] = useState([]);

  useEffect(() => {
    api.get('/products').then(response => {
      setProduts(response.data);
    })
  }, [])

  const handleAddCart = product => {
    dispatch({
      type: 'ADD_CART',
      product
    })
  }

  return(
    <Container>
      <ProductList>
        {products.map(product => (
          <li key={product.id}>
            <img src={product.image} alt={product.title}/>
            <strong>{product.title}</strong>
            <span>{product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
            <button type="button" onClick={() => handleAddCart(product)}>
              Adicionar ao Carrinho
            </button>
          </li>
        ))}
      </ProductList>
    </Container>
  )
}

export default connect()(Home);
