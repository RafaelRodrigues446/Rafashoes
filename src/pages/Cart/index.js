import React from 'react';
import tenis from '../../assets/tenis.jpg';
import { BsDashCircle, BsPlusCircle } from 'react-icons/bs';
import { FaTrashAlt } from 'react-icons/fa';

import { Container, Table, Footer } from './styles';

function Cart() {
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
          <tr>
            <td>
              <img src={tenis} alt="imagem" />
            </td>
            <td>
              <strong>Tênis leve super confortável</strong>
              <span>R$ 499,00</span>
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

export default Cart;
