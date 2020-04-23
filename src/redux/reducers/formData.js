import { SET_BILL_DATA, SET_TXREF, VERIFY_BILL } from "../types"

const INITIAL_STATE = {
    billData:'',
    TXREF:"",
    verifyResult:""
}

const formDataReducer = (state = INITIAL_STATE,action) => {
    switch(action.type){
       case SET_BILL_DATA:
           return {...state,billData:action.payload }
       case SET_TXREF:
           return {...state,TXREF:action.payload }
       case VERIFY_BILL:
           return {...state,verifyResult:action.payload }
       default:
           return state
    }
}

export default formDataReducer