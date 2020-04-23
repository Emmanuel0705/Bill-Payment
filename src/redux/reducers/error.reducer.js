import { SET_ERROR } from "../types"

const INITIAL_STATE = {
    errorMsg:'',
   
}

const errorReducer = (state = INITIAL_STATE,action) => {
    switch(action.type){
       case SET_ERROR:
           console.log("payload",action.payload)
           return {...state,errorMsg:action.payload }
       default:
           return state
    }
}

export default errorReducer