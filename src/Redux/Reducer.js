import { HANDELADD, HANDELEDIT } from "./ActionTypes"
const initialState={
    tasks:[
        {title:'Morbius', id :Math.random(), description :'Action', isDone: true},
        {title:'Uncharted', id :Math.random(), description :'Advanture', isDone: true},
        {title:'The lost city', id :Math.random(), description :'Advanture', isDone: false}
    
      ]
}
const Reducer=(state = initialState, action)=>{
    switch (action.type){
        case HANDELADD : return {...state, tasks:[...state.tasks, action.payload]}
        case HANDELEDIT: return {...state, tasks:state.tasks.map(task=> task.id==action.payload? {...task,isDone :!task.isDone}:task)}
        default: return state
    }
}

export default Reducer