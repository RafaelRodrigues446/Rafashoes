import React, { useEffect, useState } from 'react';

import api from '../../services/api';

import { Container, ProductList } from './styles';

function Home() {

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
            <span>R$ {product.price}</span>
            <button>Adicionar ao Carrinho</button>
          </li>
        ))}
      </ProductList>
    </Container>
  )
}

export default Home;
