import { HANDELADD, HANDELEDIT } from "./ActionTypes"

export const handelAdd=(payload)=>{
    return(
        {
            type: HANDELADD,
            payload
        }
    )
}
export const handelEdit=(payload)=>{
    return(
        {
            type: HANDELEDIT,
            payload
        }
    )
}