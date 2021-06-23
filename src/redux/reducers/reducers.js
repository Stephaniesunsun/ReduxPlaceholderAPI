import {Actiontypes} from '../constants/actionType';

const initialState={
    posts:[],
}
export const listReducer=(state=initialState,{type,payload})=>{
    switch(type){
        case Actiontypes.SET_LIST:
            return {...state, posts:payload};
        default:
            return state;
    }
}