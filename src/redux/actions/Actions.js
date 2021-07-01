import {Actiontypes} from '../constants/actionType';
import  axios from 'axios';

export const fetchRequest=()=>{
    return{
        type:Actiontypes.FETCH_REQUEST
    }
}
export const fetchPost=()=>{
    return function(dispatch){
        dispatch(fetchRequest());//set loading to true
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response=>{
            dispatch(listSuccess(response.data))
        })
        .catch(error=>{
            dispatch(listFailure(error.message))
        })
    }
}
export const listSuccess=data=>{
    return {
        type:Actiontypes.LIST_SUCCESS,
        payload:data
    }
}

export const listFailure=error=>{
    return{
        type:Actiontypes.LIST_FAILURE,
        payload:error
    }
}
