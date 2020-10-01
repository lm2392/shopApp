export const ADD_TO_CART = 'ACTION';

export const addToCart = product => {
    return {type: ADD_TO_CART, product: product}
};
