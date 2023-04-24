import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(1+count);
  }

  return <button onClick={increment}>I have clicked {count} times haha</button>;
}