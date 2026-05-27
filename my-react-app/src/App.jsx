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


import React from 'react'
import Form from './Form'

const App = () => {
  return (
    <div>
      <Form />
    </div>
  )
}

export default App