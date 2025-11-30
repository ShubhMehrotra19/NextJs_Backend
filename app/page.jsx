"use client"
import React from "react";

const page = () => {

  const data = {
    name: "Shubham",
    role: "coder"
  }

  const handleClick = async () => {
    let a = await fetch("/api/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
    let res = await a.json();
    console.log(res);
  }

  return (
    <div>
      <h1 className="text-xl font-bold">nextjs API routes demo</h1>
      <button className="px-5 py-2 rounded-md border-black cursor-pointer border-2 hover:scale-105 active:scale-95" onClick={handleClick}>Click me</button>
    </div>
  );
};

export default page;
