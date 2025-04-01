"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("Welcome to the nextjs");
  const router = useRouter();

  useEffect(()=> {
    console.log("useEffect triggered!");
    console.log(`Count Updated: ${count}`);
    setMessage(`You clicked ${count} times`);
  },[count]);

  return (
    <div>
      <h1>{message}</h1>
      <p>Current Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <br/>
      <button onClick={()=>router.push("/about")} style={{marginTop: "10px"}}>Go to About Page</button>
    </div>
  );
}
