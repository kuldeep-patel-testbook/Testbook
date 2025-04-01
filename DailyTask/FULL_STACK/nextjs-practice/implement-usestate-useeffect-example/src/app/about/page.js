"use client";

import { useRouter } from "next/navigation";

export default function About () {
    const router = useRouter();
  return (
    <div>
        <h1>About Page</h1>
        <p>This is a simple next.js app with useState, useEffect and routing</p>
        <button onClick={()=> router.push('/')}>Back to Home Page</button>
    </div>
  )
}
