import {Actiontypes} from '../constants/actionType';

export const setList=(data)=>{
    return{
        type:Actiontypes.SET_LIST,
        payload: data
    }
}