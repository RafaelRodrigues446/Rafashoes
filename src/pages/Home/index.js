import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as cartActions from '../../store/modules/cart/actions';
import api from '../../services/api';

import { Container, ProductList } from './styles';

function Home({ addCart }) {

  const [ products, setProduts ] = useState([]);

  useEffect(() => {
    api.get('/products').then(response => {
      setProduts(response.data);
    })
  }, [])

  return(
    <Container>
      <ProductList>
        {products.map(product => (
          <li key={product.id}>
            <img src={product.image} alt={product.title}/>
            <strong>{product.title}</strong>
            <span>{product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
            <button type="button" onClick={() => addCart(product)}>
              Adicionar ao Carrinho
            </button>
          </li>
        ))}
      </ProductList>
    </Container>
  )
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators( cartActions, dispatch)
}

export default connect(null, mapDispatchToProps )(Home);
