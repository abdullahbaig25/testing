import React, { useState, useRef } from "react";

const TimerComponent = () => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  const handleStart = () => {
    if (ref.current !== null) return;
    ref.current = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
  };
  const handleStop = () => {
    clearInterval(ref.current);
    ref.current = null;
  };

  // focus
  const init = useRef(null);
  const foucsIn = () => {
    init.current.focus();
    init.current.style.backgroundColor = "black";
  };

  const fields = [
    {
      name: "Name",
      type: "text",
      disable: false,
      placeholder: "enter your name",
    },
    {
      name: "Number",
      type: "number",
      disable: false,
      placeholder: "enter your number",
    },
    { name: "cnic", type: "text", disable: true, placeholder: "enter cnic" },
  ];
  const complexArray = [
    [1, 2], // Sub-array 1
    [3, 4], // Sub-array 2
    { name: "Alice", age: 25 }, // Object
  ];

  // Destructuring the complex array
  const [[first1, second1], [first2, second2], { name, age }] = complexArray;

  console.log(first1, second1); // 1 2
  console.log(first2, second2); // 3 4
  console.log(name); // Alice
  console.log(age); // 25

  return (
    <div>
      <div>
        {fields.map((itr, index) => (
          <div key={index} style={{ padding: "20px" }}>
            <input
              name={itr.name}
              disabled={itr.disable}
              type={itr.type}
              placeholder={itr.placeholder}
            />
          </div>
        ))}
      </div>

      <h1> Start </h1>
      <div>
        <button onClick={handleStart}> start timer</button>
      </div>
      {count}
      <div>
        <button onClick={handleStop}>stop</button>
      </div>

      <div>
        <input ref={init} type="text" placeholder="tesxt" />
        <button onClick={foucsIn}>click</button>
      </div>
    </div>
  );
};

export default TimerComponent;
