import React from 'react';
import tenis from '../../assets/tenis.jpg';
import { connect } from 'react-redux';
import { BsDashCircle, BsPlusCircle } from 'react-icons/bs';
import { FaTrashAlt } from 'react-icons/fa';

import { Container, Table, Footer } from './styles';

function Cart({ cart }) {
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
            <tr>
              <td>
                <img src={product.image} alt={product.title}/>
              </td>
              <td>
                <strong>{product.title}</strong>
                <span>R$ {product.price}</span>
              </td>
              <td>
                <div>
                  <button type="button">
                  <BsDashCircle size={20}/>
                  </button>
                  <input type="number" readOnly value="1" />
                  <button type="button">
                    <BsPlusCircle size={20}/>
                  </button>
                </div>
              </td>
              <td>
                <strong> R$ 499,00</strong>
              </td>
              <td>
                <button type="">
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
          <strong>R$ 2000,00</strong>
        </div>
      </Footer>
    </Container>
  )
}

const mapStateToProps = ( state ) => ({
  cart: state.cart,
})

export default connect(mapStateToProps)(Cart);
