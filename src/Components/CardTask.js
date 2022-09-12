import React from 'react'
import { Card,Button} from 'react-bootstrap'
import { useDispatch } from 'react-redux/es/exports'
import { handelEdit } from '../Redux/Action'
const CardTask=({task})=>{
    const dispatch= useDispatch()
    return(
        <div>
            <Card>
                <Card.Body>
                    <Card.Title>{task.title}</Card.Title>
                    <Card.Title>{task.isDone ? 'true':'false'}</Card.Title>
                    <Button onClick={()=>dispatch(handelEdit(task.id))} variant="outline-primary">{task.isDone? 'unDone':'done'}</Button>{''}
                </Card.Body>
            </Card> 

        </div>
    )
}

export default CardTask