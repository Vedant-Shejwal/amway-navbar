import { Types } from './cartTypes';

export const addCart = (item) => ({
    type: Types.ADD_CART,
    payload: item,
});

export const reduceQuantity = (itemId) => ({
    type: Types.REDUCE_QUANTITY,
    payload: itemId,
});

export const removeItem = (itemId) => ({
    type: Types.REMOVE_ITEM,
    payload: itemId,
});
