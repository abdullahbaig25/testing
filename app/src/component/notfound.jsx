import React from 'react'
import { useNavigate } from 'react-router-dom'
const NotFound=()=>{
    const n = useNavigate();
    const fun=(p)=>{
        n(p);
    }
    return(
        <div>
                <button onClick={()=>fun("/")}>back</button>
        </div>
    )
}
export default NotFound;