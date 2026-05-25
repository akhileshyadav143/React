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

// export default App
import  {useState} from 'react'

const App = () => {
  let [color,setColor]= useState("white");
function fun1(){
   setColor("red")
}
function fun2(){
  setColor("green")
}
  return (
    <div   style={{backgroundColor: color,height:"50vh",width:"80vw"}}>
      <button onClick={fun1}>red</button>
      <button onClick={fun2}>green</button>
      <h2 > THIS IS BUTTON ON CLIK A RED AND GREEN  </h2>
    </div>
  )
}

export default App


