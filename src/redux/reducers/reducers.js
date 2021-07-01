import {Actiontypes} from '../constants/actionType';

const initialState={
    loading:false,
    posts:[],
    error:''
}
export const listReducer=(state=initialState,{type,payload})=>{
    switch(type){
        case Actiontypes.FETCH_REQUEST:
            return {...state, laoding:true};
        case Actiontypes.LIST_SUCCESS:
            return{loading:false, posts:payload,error:''};
        case Actiontypes.LIST_FAILURE:
            return{loading:false, posts:[],error:payload};
        default:
            return state;
    }
}