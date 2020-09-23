function cart( state = [], action ) {
  switch(action.type){
    case 'ADD_CART':
      return [...state, action.product]
    default:
      return state;
  }
}

export default cart;
