import { FETCH_TODOS_FAIL, FETCH_TODOS_REQUEST, FETCH_TODOS_SUCCESS } from './actionType';

const initState ={
    products :[],
    loading:false,
    error:null
}

const todoReducer = (state=initState,action) =>{
    switch (action.type) {
        case FETCH_TODOS_REQUEST:
            return{
                ...state,
                loading:true
            }
        case FETCH_TODOS_SUCCESS:
            return{
                ...state,
                loading:false,
                products :action.payload
            }
        case FETCH_TODOS_FAIL:
            return{
                ...state,
                loading:false,
                error: action.payload
            }

        default:
            return state;
    }
}
export default todoReducer;