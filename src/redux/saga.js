
import  axios  from 'axios';
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { FETCH_TODOS_FAIL, FETCH_TODOS_REQUEST, FETCH_TODOS_SUCCESS, ADD_PRODUCT_REQUEST, UPDATE_PRODUCT_REQUEST, DELETE_PRODUCT_REQUEST } from './actionType';

// API 호출 함수
const fetchProductsApi = () => axios.get('http://localhost:8080/product');

const addProductAPI = (product) => axios.post(fetchProductsApi, product);
const updateProductAPI = (id, product) => axios.put(`${fetchProductsApi}/${id}`, product);
const deleteProductAPI = (id) => axios.delete(`${fetchProductsApi}/${id}`);


function* fetchProducts(){
   try {
    const res = yield call(fetchProductsApi);
    yield put({
        type:FETCH_TODOS_SUCCESS,
        payload:res.data
    })
   } catch (error) {
    yield put({
        type:FETCH_TODOS_FAIL,
        payload:error.message
    })
   }
}

function* addProductSaga(action) {
    yield call(addProductAPI, action.payload);
    yield put({ type: FETCH_TODOS_REQUEST });
}

function* updateProductSaga(action) {
    yield call(updateProductAPI, action.payload.id, action.payload.product);
    yield put({ type: FETCH_TODOS_REQUEST });
}

function* deleteProductSaga(action) {
    yield call(deleteProductAPI, action.payload);
    yield put({ type: FETCH_TODOS_REQUEST });
}
export default function* todoSaga(){
    yield takeLatest(FETCH_TODOS_REQUEST,fetchProducts);
    yield takeLatest(ADD_PRODUCT_REQUEST, addProductSaga);
    yield takeLatest(UPDATE_PRODUCT_REQUEST, updateProductSaga);
    yield takeLatest(DELETE_PRODUCT_REQUEST, deleteProductSaga);
}
