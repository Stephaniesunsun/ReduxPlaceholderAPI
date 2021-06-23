import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {setList} from '../../redux/actions/Actions'
import axios from 'axios';
import { getByTitle } from '@testing-library/dom';
import Item from '../Item/Item'

const List = () => {
    const list=useSelector((state)=>state.posts);
    const dispatch = useDispatch();
    const getList=async ()=>{
        const response=await axios
        .get(`https://jsonplaceholder.typicode.com/posts`)
        .catch((err)=>console.log(err));
        console.log(response.data)
        dispatch(setList(response.data))//update the state
    }
    useEffect(()=>getList(), []);
    console.log(list)
    //console.log(typeof(list))
    /*
    list.map((post)=>{
        const {title, body}=post;
        return(
            <>
                <h2>{title}</h2>
                <p>{body}</p>
            </>
        )
    })*/
    return (
        <>
            <Item/>
        </>
    )
   
}

export default List
