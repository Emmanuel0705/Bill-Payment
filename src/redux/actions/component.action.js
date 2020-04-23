import { SET_BILL_FORM, SET_PAYMENT_FORM, SET_VERIFICATION_FORM, SET_HOME } from "../types";

export const billForm = () => ({
    type:SET_BILL_FORM
})
export const paymentForm = () => ({
    type:SET_PAYMENT_FORM
})
export const verificationForm = () => ({
    type:SET_VERIFICATION_FORM
})
export const home = () => ({
    type:SET_HOME
})
