import Task from "./Task"

function Tasks({tasks, onDelete, onToggle}) {
    
  return (
    <>
    {tasks.map((task)=>{
        return(
            <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle}/>)
        })
   
    //console.log(tasks)    
    }
     
    </>
  )
}

export default Tasks