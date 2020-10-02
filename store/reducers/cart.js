import {ADD_TO_CART} from '../actions/cart'

const initialState = {
  items: [],
  totalAmount: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
        const addedProduct = action.product;  
        const prodPrice = addedProduct.price;
        const prodTitle = addedProduct.title;

        if(state.items[addedProduct.id]){
            
        }else{
          const newCartItem = new CartItem (1,prodPrice,prodTitle,prodPrice)
          return {
              ...state,
              items:{...state.items, [addedProduct.id]: newCartItem}
          }
        }
   }
  return state;
};
