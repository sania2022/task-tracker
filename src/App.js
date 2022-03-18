import { useState } from "react"
import Header from './components/Header'
import Tasks from './components/Tasks';
function App() {
  const [tasks, setTasks]=useState([
    {
        id:1,
        text:'Doctors Appointment',
        day:'Feb 5th at 2:30 PM',
        reminder:true
    },
    {
        id:2,
        text:'Meeting at school',
        day:'Feb 6th at 11:00 AM',
        reminder:true
    },
    {
        id:3,
        text:'Food Shopping',
        day:'Feb 10th at 5:00 PM',
        reminder:false
    }
  ])
  return (
    <div className="container">
   <Header />
    <Tasks tasks={tasks}/>
    </div>
  )
}

export default App;
