import { produce } from 'immer';

function cart( state = [], action ) {
  switch(action.type){
    case 'ADD_CART':
      return produce(state, draft => {

        const productIndex = draft.findIndex( p => p.id === action.product.id);

        if ( productIndex >= 0 ){
          draft[productIndex].amount += 1;
        } else {
          draft.push({
            ...action.product,
            amount: 1
          })
        }
      })

      case 'UPDATE_AMOUNT': {

        if ( action.amount <= 0 ) {
          return state;
        }

        return produce(state, draft => {

          const productIndex = draft.findIndex( p => p.id === action.id);

          if ( productIndex >= 0 ){
            draft[productIndex].amount = action.amount;
          } else {
            draft.push({
              ...action.product,
              amount: 1
            })
          }
        })
      }

      case 'DELETE_PRODUCT': {

        return produce(state, draft => {

          const productIndex = draft.findIndex( p => p.id === action.id);

          if ( productIndex >= 0 ) {
            draft.splice(productIndex, 1);
          }
        });
      }

    default:
      return state;
  }
}

export default cart;
