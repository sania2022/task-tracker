import Task from "./Task"

function Tasks({tasks}) {
    
  return (
    <>
    {tasks.map((task)=>{
        return(
            <Task key={task.id} task={task}/>)
        })
   
    //console.log(tasks)    
    }
     
    </>
  )
}

export default Tasks