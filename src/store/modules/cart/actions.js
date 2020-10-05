export const addCart = product => ({
  type: 'ADD_CART',
  product
})

export const updateAmount = ( id, amount ) => ({
  type: 'UPDATE_AMOUNT',
  id,
  amount
})

export const deleteProduct = ( id ) => ({
  type: 'DELETE_PRODUCT',
  id,
})
