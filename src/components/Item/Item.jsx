import React from 'react'
import {useSelector, useDispatch} from 'react-redux';

const Item = () => {
    const post=useSelector((state)=>state.posts);    
    return (<>post here</>)
}

export default Item
