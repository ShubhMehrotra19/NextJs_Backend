// "use client"
// import React from "react";

// const page = () => {

//   const data = {
//     name: "Shubham",
//     role: "coder"
//   }

//   const handleClick = async () => {
//     let a = await fetch("/api/add", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify(data)
//     })
//     let res = await a.json();
//     console.log(res);
//   }

//   return (
//     <div>
//       <h1 className="text-xl font-bold">nextjs API routes demo</h1>
//       <button className="px-5 py-2 rounded-md border-black cursor-pointer border-2 hover:scale-105 active:scale-95" onClick={handleClick}>Click me</button>
//     </div>
//   );
// };

// export default page;

"use client"
import React from 'react'
import { submitAction } from '@/actions/form'
import { useRef } from 'react'

export default function Home(){
  //nextJs gives us an ability that we can directly make the form action into a server function. 
  // const submitAction = async (e) => {
  //   "use server"
  //   console.log(e.get("name"), e.get("address"));
  //   let a = await fs.writeFile("data.txt", "Hey I am good")
  //   console.log(a);
    
  // }

  let ref = useRef();

  return (
    <div className='flex flex-col justify-center items-center h-screen w-screen'>
      <form ref={ref} className='border-black border-2 p-3  flex flex-col justify-center items-center gap-2 w-fit h-fit' action={(e) => { submitAction(e); ref.current.reset() }}> {/* useRef ka use karke we can reset the values once the values are submitted*/}
        <div>
          <label htmlFor="name"></label>
          <input type="text" id='name' name='name' placeholder='enter name' className='text-black border-black border-2 rounded-md pl-2' />
        </div>
        <div>
          <label htmlFor="address"></label>
          <input type="text" id='address' name='address' placeholder='enter address' className='text-black border-black border-2 rounded-md pl-2' />
        </div>
        <div><button className='px-5 py-2 text-white bg-black rounded-md hover:scale-105 active:scale-95 cursor-pointer' type='submit'>Submit</button></div>
      </form>
    </div>
  )
}

// ya to we can make a function with the submit button and make a handleSubmit function with e.preventDefault() and then fetch the data to the api route
// but nextJs has a better way to handle the form submission.

