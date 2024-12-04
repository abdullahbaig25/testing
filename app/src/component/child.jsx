import React from 'react'
const Child=({id,name,fun})=>{
    console.log("p",id,name,fun);
    return(
        <div>
            <button onClick={fun}>call me click</button>
        </div>
    )
}
export default Child;