import { FETCH_TODOS_REQUEST,FETCH_TODOS_SUCCESS,FETCH_TODOS_FAIL,ADD_PRODUCT_REQUEST,
    UPDATE_PRODUCT_REQUEST,
    DELETE_PRODUCT_REQUEST } from "./actionType";

export const fetchTodoRequset = () => ({
    type:FETCH_TODOS_REQUEST
})
export const fetchTodoSuccess = products => ({
    type:FETCH_TODOS_SUCCESS,
    payload:products 
})
export const fetchTodoFail = error => ({
    type:FETCH_TODOS_FAIL,
    payload:error
})
export const addProduct = (product) => ({
     type: ADD_PRODUCT_REQUEST,
      payload: product 
    });
export const updateProduct = (id, product) => ({ 
    type: UPDATE_PRODUCT_REQUEST,
     payload: { id, product } 
    });
export const deleteProduct = (id) => ({ 
    type: DELETE_PRODUCT_REQUEST,
     payload: id 
    });