// import {useState} from "react"

// const App=()=> {
//   let[count,setCount]=  useState(0)
//   function fun1(){
//     setCount(++count)
//   }
//   function fun2(){
//     setCount(--count)
//   }
//   return (
//     <div><h2> {count}</h2>
//      <button onClick={fun1}>ADD</button>
//      <button onClick={fun2}></button>
//     </div>
//   )
// }

// export default App 





 
// import {useState} from 'react'

// const App = () => {
//   let [color,setColor]=useState("rad")
//   function fun1(){
//     setColor("green")
//   }
//   return (
//     <div style={{backgroundColor:color,width:"100vw",height:"100vh"}}>
//       <button onClick={fun1}>Green</button> </div>
//   );
// };

// export default App


// import {useState} from 'react'

// const App = () => {
//   let [color,setColor]=useState("white")
//   function fun1(){
//     setColor("Blue")
//   }
//   return (
//     <div style={{backgroundColor: color,width:"50vw",height:"50vh"}}>
//       <button onClick={fun1}>Blue</button>
//     </div>
//   )
// }

// // export default App
// import  {useState} from 'react'

// const App = () => {
//   let [color,setColor]= useState("white");
// function fun1(){
//    setColor("red")
// }
// function fun2(){
//   setColor("green")
// }
//   return (
//     <div   style={{backgroundColor: color,height:"50vh",width:"80vw"}}>
//       <button onClick={fun1}>red</button>
//       <button onClick={fun2}>green</button>
//       <h2 > THIS IS BUTTON ON CLIK A RED AND GREEN  </h2>
//     </div>
//   )
// }

// export default App





// lec2
// import React from 'react'
// import Home from  './Home'
// import {New} from './Home'
// const App = () => {
//   return (
//     <div><Home/>
//    < New/></div>
//   )
// }

// export default App






// import React from 'react'
// import Home from  './Home'

// const App = () => {
//   let user="Akhilesh"
//   return (
//     <div><Home   data={user}/>
//       </div>
//   )
// }

// export default App





// lec2
// import React from 'react'
// import Home from  './Home'

// const App = () => {
//   let user="Akhilesh"
//   return (
//     <div><Home data={user}/></div>
//   )
// }

// export default App




// lec3
// import {useState} from 'react'

// const App = () => {
//     let [input,SetInput]=    useState("")
//     function fun1(e){
//         // console.log(e.target.value);
//         SetInput(e.target.value)
//         console.log(input);
//     }
//   return (
//     <div>
//         <h2>{input}</h2>
//         <input type="text" name="input" placeholder="Enter your name" onChange={fun1}></input>
        
//            </div>
//   )
// }

// export default App





// import {useState} from 'react'

// const App = () => {
//     let [input,SetInput]=    useState("")
//     let  [data,Setdata]=      useState("")
//     function fun1(e){
//         // console.log(e.target.value);
//         SetInput(e.target.value)
//        // console.log(input);
//     }
//     function fun2(){
//         Setdata(input)
//     }
//   return (
//     <div>
//         <h2>{data}</h2>
//         <input type="text" name="input" placeholder="Enter your name" onChange={fun1}></input>
//         <button onClick={fun2}>click</button>
//            </div>
//   )
// }

// export default App


// import React from 'react'
// import Form from './Form'

// const App = () => {
//   return (
//     <div>
//       <Form />
//     </div>
//   )
// }

// export default App  









// Lec4

// USeEffect

// import   {useState} from 'react'
// import{useEffect} from "react"
// const App = () => {
//   let [count,SetCount]= useState(0)
//   useEffect(()=>{
//   console.log("hello")
//   },[])
 

//   return (
//     <div>
//       <h2>{count}</h2>
//       <button   onClick={()=>SetCount(count+1)}>click</button>
//     </div>
//   )
// }

// export default App
// city chang e kerna 
// import   {useState} from 'react'
// import{useEffect} from "react"
// const App = () => {
//   let [count,SetCount]= useState(0)
//    let [city,SetCity]= useState("Goa")
//   useEffect(()=>{
//   console.log("hello")
//   },[city])
 

//   return (
//     <div>
//       <h2>{count}</h2>
//       <h3>{ city}</h3>
//        <button   onClick={()=>SetCity("manali")}>Change</button>
//       <button   onClick={()=>SetCount(count+1)}>click</button>
      
//     </div>
//   )
// }

// export default App


//   api ka
// import   {useState} from 'react'
// import{useEffect} from "react"
// const App = () => {
//   let [count,SetCount]= useState(0)
//    let [city,SetCity]= useState("Goa")
//   useEffect(()=>{
//     async function  call() {
//         let res=  await fatch("https://jsonplaceholder.typicode.com/posts")
//          let data= await res.json()
//          console.log(data);
         
//     }
//     call()
//   // console.log("hello")
//   },[])
 

//   return (
//     <div>
//       <h2>{count}</h2>
//       <h3>{ city}</h3>
//        <button   onClick={()=>SetCity("manali")}>Change</button>
//       <button   onClick={()=>SetCount(count+1)}>click</button>
      
//     </div>
//   )
// }

// export default App






// import React, { useState, useEffect } from 'react';

// const App = () => {
//   const [input, setInput] = useState(0);
//   const [city, setCity] = useState("Delhi");
//   useEffect(() => {
// //     console.log("useEffect called");
// //   }, [city]);
// async function call() {
// let res=await fetch("https://jsonplaceholder.typicode.com/posts")
// let data=await res.json()
// console.log(data);
// }
// call()

//   } , []);
//   return (
//     <div>
//       <h2>{input}</h2>
//       <p>City: {city}</p>
//       <button onClick={() => setCity("Mumbai")}>Change City</button>
//       <button onClick={() => setInput(input + 1)}>+</button>
//       <button onClick={() => setInput(input - 1)}>-</button>
//     </div>
//   );
// };

// export default App;



// 1 and title print

// import React, { useState, useEffect } from 'react';

// const App = () => {
//   const [ApiData, setApiData] = useState([]);
 
//   useEffect(() => {
// //     console.log("useEffect called");
// //   }, [city]);
// async function call() {
// let res=await fetch("https://jsonplaceholder.typicode.com/posts")
// let data=await res.json()
// setApiData(data)
// // console.log(data);
// }
// call()

//   } , []);
//   return (
//     <div>
//    {
//     ApiData.map((a)=>{
//       return(
//         <div>
//         <h1>{a.id}</h1>
//         <h2>{a.title}</h2>
//         </div>
//       )
//     })
//    }



//     </div>
//   )
// } 
  

// export default App;





// import React, { useEffect, useState } from "react";
// import "./App.css";

// const App = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     async function fetchProducts() {
//       try {
//         const res = await fetch("https://dummyjson.com/products");
//         const data = await res.json();

//         setProducts(data.products);
//       } catch (error) {
//         console.error("Error fetching products:", error);
//       }
//     }

//     fetchProducts();
//   }, []);

//   return (
//     <div>
//       <h1>Products List</h1>

//       {products.map((product) => (
//         <div
//           key={product.id}
//           style={{
//             border: "1px solid #ccc",
//             margin: "10px",
//             padding: "10px",
//           }}
//         >
//           <h2>{product.title}</h2>
//           <img
//             src={product.thumbnail}
//             alt={product.title}
//             width="200vw"
//           />
//           <p>Price: ${product.price}</p>
//           <p>Category: {product.category}</p>
//           <p>{product.description}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default App;





// import './App.css'
// const App = () => {
//       let [ApiData,SetApiData]=    useState([])
//       useEffect(()=>{
              
//               async  function call(){
//                 let res=  await  fetch("https://dummyjson.com/products")
//                 let data=        await   res.json()
//                 console.log(data.products);
//                 SetApiData(data.products)
//               }
//               call()
//       },[])
      
//   return (
//     <div id="parent_div"   className="">
//         {
//           ApiData.map((a)=>{
//                return(
//                 <div id="card">
//                   <h1>{a.id}</h1>
//                   <img  src={a.thumbnail}/>
//                 </div>
//                )
//           })
//         }
//     </div>
//   )
// }

// export default App





// import React from 'react'
// import Tack from  './Tack'
// const App = () => {
//   return (
//     <div><Tack/></div>
//   )
// }

// export default App

// import React from 'react'
// import  Navbar from './Navbar'
// import { Route, Routes } from "react-router-dom"

// import Home from "./Home"
// import About from "./About"
// import Tack from "./Tack"

// const App = () => {
//   return (
//     <div>

//       <Navbar/>
//       <Routes>
//         <Route   path="/"  element={<Home/>}/>
//           <Route   path="/about"  element={<About/>}/>
//             <Route   path="/tack"  element={<Tack/>}/>
//         </Routes>
//         </div>
//   )
// }

// export default App



import React from 'react'
import Todo from './Todo'
const App = () => {
  return (
    <div><Todo/></div>
  )
}

export default App