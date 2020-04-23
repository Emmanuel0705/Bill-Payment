import { SET_BILL_DATA, SET_TXREF, VERIFY_BILL, SET_ERROR } from "../types";
import axios from 'axios'

export const setBillData = (payload) => ({
    type:SET_BILL_DATA,
    payload
})
export const setTXREF = (payload) => ({
    type:SET_TXREF,
    payload
})

export const verifyBill = (data,history) => async dispatch => {
    try {
        console.log(history)
        const config = {
            headers:{
                "Content-Type": 'application/json'
            },
            auth: {
                username:'emmanuelloluwatobi@gmail.com',
                password:"oluwatobi16"
            }
        }
        
        const res = await axios.post("https://sandbox.vtpass.com/api/merchant-verify",data,config)
        if(res.data.content.error) {
            dispatch({type:SET_ERROR,payload:res.data.content.error})
            
        }
        
        dispatch({type:VERIFY_BILL,payload:data})
        window.location.href = "https://ravesandbox.flutterwave.com/pay/tzr4kc05zad5"
    } catch (err) {
        console.log('err',err.message)
    }
    
}
export const payBill = (data,history) => async dispatch => {
    try {
        const config = {
            headers:{
                "Content-Type": 'application/json'
            },
            auth: {
                username:'emmanuelloluwatobi@gmail.com',
                password:"oluwatobi16"
            }
        }
        
        const res = await axios.post("https://sandbox.vtpass.com/api/pay",data,config)
        if(res.data.content.error) {
            dispatch({type:SET_ERROR,payload:res.data.content.error})
            
        }
        
        dispatch({type:VERIFY_BILL,payload:data})
        console.log(res.data.content)
       history.push("success/Your-Bill-Has-Been-Paid-Successfully")
    } catch (err) {
        console.log('err',err.message)
    }
   
}

