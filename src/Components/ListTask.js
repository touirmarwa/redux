import {useState} from "react"
import { useSelector } from "react-redux/es/exports"
import CardTask from "./CardTask"

const ListTask=()=>{
    const tasks= useSelector(state=>state.tasks)
    const [cart,setCart]= useState('all')
    return(
        <div>
            <div className="butt">
            <button style={{borderRadius: '5px', margin:'5px', boxShadow:'0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)'}} onClick={()=>setCart('all')} variant="primary">All</button>{''}
            <button style={{borderRadius: '5px', margin:'5px', boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)'}} onClick={()=>setCart('done')} variant="primary">Done</button>{''}
            <button style={{borderRadius: '5px', margin:'5px', boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)'}} onClick={()=>setCart('undone')} variant="primary">UnDone</button>{''}
            </div>
            {
                cart=='all'?
                tasks.map(task=> <CardTask task={task}/>)
                : cart=='done'?
                tasks.filter(task=>task.isDone==true).map(task=> <CardTask task={task}/>)
                :
                tasks.filter(task=>task.isDone==false).map(task=> <CardTask task={task}/>)
            }


        </div>
    )
}

export default ListTask