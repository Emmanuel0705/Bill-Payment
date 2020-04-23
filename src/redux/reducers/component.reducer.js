import { SET_BILL_FORM, SET_PAYMENT_FORM, SET_VERIFICATION_FORM, SET_HOME } from "../types"

const INITIAL_STATE = {
    billForm:false,
    paymentForm:false,
    verificationForm:false
}
const componentReducer = (state = INITIAL_STATE,action) => {
    switch(action.type){
        case SET_BILL_FORM:
            return {
                ...state,
                billForm:!state.billForm
            }
        case SET_PAYMENT_FORM:
            return {
                ...state,
                paymentForm:!state.paymentForm
            }
        case SET_VERIFICATION_FORM:
            return {
                ...state,
                verificationForm:!state.verificationForm
            }
        case SET_HOME:
            return {
                ...state,
                billForm:false,
               paymentForm:false,
               verificationForm:false
            }
        default:
            return state
    }
}
export default componentReducer