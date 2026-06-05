// import React, { useEffect, useState } from "react";
// import "./Todo.css";

// const Todo = () => {
//   const [task, setTask] = useState("");
//   let [index,SetIndex]=useState(null)
//   const [todos, setTodos] = useState(()=>{
//     let data=  localStorage.getItem("key")
//     if(data){
//         return JSON.parse(data)
//     }
//     return []
//   });
//   useEffect(()=>{
//     localStorage.setItem("key",JSON.stringify(todos))

//   },[todos])



//   function edit(index){
//     setTask(todos[index])
//     SetIndex(index)

//   }


//   function handleAorUpdate(){
//     if(task.trim()==""){
//         return;
//     }
//     console.log("helloooooo");
    
//     if(index!==null){
//         let updateDATA=[...todos]
//         updateDATA[index]=task
//         setTodos(updateDATA)
//     }else{
//         setTodos([...todos,task])
//         setTask("")
//     }
    

//   }


//   function d(id){
//    let d= todos.filter((a,b)=>{
//         return id!=b

//     })
//     setTodos(d)

//   }








//   return (
//     <div className="container">
//       <h1>Todo List</h1>

//       <div className="input-box">
//         <input
//           type="text"
//           name="task"
//           value={task}
//           placeholder="Enter a task"
//           onChange={(e)=>setTask(e.target.value)}
  
//         />

// <button onClick={handleAorUpdate}>
//     {index!==null?"update":"Add"}
//     </button>
//       </div>
    

//       <div className="todo-list">
//         {todos.map((todo, index) => (
//           <div className="todo-item" key={index}>
//             <span>{todo}</span>

//             <div className="actions">
//               <button onClick={()=>edit(index)}>
//                 Edit
//               </button>

//               <button  onClick={()=>d(index)}>
//                 Delete
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Todo;






// useredusc

// import React, { useReducer } from 'react';

// const Todo = () => {

//   function reducer(state, action) {
//     if (action.type === "inc") {
//       return state + 1;
//     }
//     return state;
//   }

//   const [state, dispatch] = useReducer(reducer, 0);

//   return (
//     <div>
//       <h2>{state}</h2>
//       <button onClick={() => dispatch({ type: "inc" })}>
//         ++
//       </button>
//     </div>
//   );
// };

// export default Todo;









import React, { useReducer } from 'react';

const Todo = () => {

  function reducer(color, action) {
    if (action.type === "yellow") {
      return "yellow"
     
    }else if(action.type ==="red"){
      return "red"
    }
  else if(action.type ==="blue"){
   return "blue"
  }
     return color;
}


  const [color, dispatch] = useReducer(reducer, 0);

  return (
   <div style={{backgroundColor:color,width:"100vw",height:"100vh"}}>
      <h2>{color}</h2>
      <button onClick={() => dispatch({ type: "yellow" })}>yellow </button>

         <button onClick={() => dispatch({ type: "red" })}> red </button>
            <button onClick={() => dispatch({ type: "blue" })}>blue </button>
               
    </div>
  );
};

export default Todo;









