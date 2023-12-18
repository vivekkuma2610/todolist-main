import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export function ToDo() {
const initialToDo=[
    {
        name:"task1",
        description:"desc1",
        status:"Completed"
    },
    {
        name:"task2",
        description:"desc2",
        status:"Completed"
    },
    {
        name:"task3",
        description:"desc3",
        status:"Not completed"
    }
]
const [activeCards,setActiveCards] = useState([])
const [toDoList,setToDoList] = useState(initialToDo)
const [name, setName] = useState("")
const [description, setDescription] = useState("")
const [status, setStatus] = useState("")

function updateList(event,index){
const updatedList = toDoList.map((item,i)=>{
    if(i==index){
        // console.log("before updated list is " , toDoList)
        // console.log("index is", index)
        // console.log("value is", event.target.value)
        setStatus(event.target.value)
       // setToDoList(toDoList)
        // console.log("updated list is " , toDoList)
    }
})
}

  return (
    
    <div>
      <h1>My todo</h1>      
        <input type="text" id="name" value={name}   onChange={(event) => setName(event.target.value)} class="todoname" placeholder="Todo Name" />
        <input type="text" id="description" value={description} onChange={(event) => setDescription(event.target.value)}class="tododescription" placeholder="Todo Description" />
        <button onClick={()=>{
            const newToDoList ={
                name: name,
                description: description,
                status: "Not completed"
            }   
            setToDoList([newToDoList,...toDoList ])
            
        }}>Add Todo</button>
      
      <h1>My Todos</h1>
      <h1>Status Filter</h1>
      <select>
        <option selected>All</option>
        <option>Completed</option>
        <option>Not completed</option>
      </select>
      <div class="card-container" >
      {toDoList.map((item,index)=>{  
                    return(
                <Card id={index} key={index}>
                <Card.Body>
                  <Card.Text>Name: {item.name} <br/>Description: {item.description}</Card.Text>
                  <label>Status</label>
                  <select style={{backgroundColor:item.status==="Completed"?"#13AD8B":"#FE7F83"}} onChange={(e)=>updateList(e,index)}>
                  <option value ="Not Completed" selected={item.status === "Not Completed"}>Not completed</option>
                  <option value="Completed" selected={item.status === "Completed"}>Completed</option>
                  </select>
                  <Button >Edit</Button>
                  <Button onClick={() => {
              setToDoList(
                toDoList.filter((_,ind) =>
                  ind!== index
                )
              );
            }}>Delete</Button>
                </Card.Body>
              </Card>
            )
      })}
     </div>
    </div>
  );
}
