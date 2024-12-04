  import React, { useEffect, useState } from "react";
  import Child from "./child";
import FocusInput from "./UserRef";
import UserList from "./api";

  const Demo = () => {
    const [count, setCount] = useState(0);
    const [hide,sethide]=useState(false);

    const handleTrue=()=>{
      sethide(true);
    }
    useEffect(() => {
      console.log(`count updated ${count}`);

      return () => {
        console.log("Cleanup: Effect is about to re-run or component unmounted");
      };
    }, [count]);

    const fun=()=>{
      setCount((prev)=>prev+1);
    }
    const nestedArray = [
      [
        { id: 1, name: "Item 1.1" },
        { id: 2, name: "Item 1.2" },
      ],
      [
        { id: 3, name: "Item 2.1" },
        { id: 4, name: "Item 2.2" },
      ],
      [{ id: 5, name: "Item 3.1" }],
    ];



    return (
      <div style={{ display: "", justifyContent: "center" }}>
        <button onClick={handleTrue}>click hide</button>
        {hide && (
          <h1> showing the h1</h1>
        )}
        <div>
          {nestedArray.map((arr, index) => {
            return (
              <div key={index}>
                <h3>Group Number {index + 1}</h3>
                <ul>
                  {arr.map((item) => (
                    // <li key={item.id}>{item.name}</li>
                    <Child key={item.map} {...item} fun={fun}/>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
        {/* <button onClick={() => setCount((prev) => prev + 1)}>Click me</button> */}

        <FocusInput/>
        <UserList/>
      </div>
    );
  };

  export default Demo;
