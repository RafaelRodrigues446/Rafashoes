import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as cartActions from '../../store/modules/cart/actions';
import { bindActionCreators } from 'redux';

import { BsDashCircle, BsPlusCircle } from 'react-icons/bs';
import { FaTrashAlt } from 'react-icons/fa';

import { Container, Table, Footer } from './styles';

function Cart({ cart, total, deleteProduct, updateAmount }) {

  const decrement = ( product ) => {
    updateAmount( product.id, product.amount - 1);
  }

  const increment = ( product ) => {
    updateAmount( product.id, product.amount + 1);
  }

  return(
    <Container>
      <Table>
        <thead>
          <tr>
            <th/>
            <th>Produto</th>
            <th>Quantidade</th>
            <th>Subtotal</th>
            <th/>
          </tr>
        </thead>
        <tbody>
          {cart.map(product => (
            <tr key={product.id}>
              <td>
                <img src={product.image} alt={product.title}/>
              </td>
              <td>
                <strong>{product.title}</strong>
                <span>R$ {product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
              </td>
              <td>
                <div>
                  <button type="button" onClick={() => decrement(product)}>
                  <BsDashCircle size={20}/>
                  </button>
                  <input type="number" readOnly value={product.amount} />
                  <button type="button" onClick={() => increment(product)}>
                    <BsPlusCircle size={20}/>
                  </button>
                </div>
              </td>
              <td>
                <strong>{product.subtotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</strong>
              </td>
              <td>
                <button type="button" onClick={() => deleteProduct(product.id)}>
                  <FaTrashAlt/>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Footer>
        <button>Finalizar Pedido</button>
        <div>
          <span>Total</span>
          <strong>{total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</strong>
        </div>
      </Footer>
    </Container>
  )
}

const mapStateToProps = ( state ) => ({
  cart: state.cart.map( product => ({
    ...product,
    subtotal: product.price * product.amount
  })),

  total: state.cart.reduce( (total, product) => {
    return total + product.price * product.amount
  }, 0)
})

const mapDispatchToProps = ( dispatch ) => {
  return bindActionCreators( cartActions, dispatch )
}

export default connect( mapStateToProps, mapDispatchToProps )( Cart );
