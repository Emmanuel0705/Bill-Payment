import React,{useState} from "react"
import {connect} from 'react-redux'
import {paymentForm,verificationForm, billForm} from "./../../redux/actions/component.action"
import 'react-month-picker-input/dist/react-month-picker-input.css';
import chargeCard from '../../util/chargeCard'
import validateOTP from "../../util/validateOTP";
import { setTXREF } from "../../redux/actions/formData.action";
import { setError } from "../../redux/actions/error.action";

const PaymentForm = ({verificationForm,paymentForm,billData,setTXREF,setError}) => {
    const [formData,setFormData] = useState({cardno:"",cvv:"",expirymonth:"",expiryyear: "",
    amount:"200",phonenumber:billData.phone,firstname:billData.firstname,
    lastname:billData.lastname,email:billData.email
    })
    const setData = e => setFormData({...formData,[e.target.name]:e.target.value})
    const onSubmit = async e => {
         e.preventDefault()        
         const charge = await chargeCard({...formData})
         if(charge.body.status === "error"){
             setError(charge.body.message)
             console.log(charge.body.message)
         }else{
            setTXREF(charge.body.data.flwRef)
            paymentForm()
            verificationForm()
         }
    }
  
return ( 
    <div className="card">
         <form onSubmit={e => onSubmit(e)}>
             <div>
                 <h1>PayMent Page</h1>
                 <hr/>
                 <div>
                     <input value={formData.cardno} name="cardno" required type="number"
                      placeholder="Card NUMBER" onChange={e => setData(e)}/>
                      <input value={formData.cvv} name="cvv" required type="text"
                      placeholder="CVV" maxLength="3" onChange={e => setData(e)}/>
                      <input className="mini" value={formData.expirymonth} name="expirymonth"
                       required type="text" maxLength="2" placeholder="Exp Month"
                        onChange={e => setData(e)}/>
                       <input className="mini" value={formData.expiryyear} name="expiryyear"
                        required type="text" placeholder="Exp year" maxLength="2"
                         onChange={e => setData(e)}/>
                        <input value={`# ${formData.amount}`} name="" required  type="text"
                      placeholder="Amount" onChange={e => setData(e)}/>
                       
                     <button className="form-btn" type="submit"
                  >Click</button>
                 </div>
                 <hr/>
                 
             </div>
         </form>

    </div>
) 
   
}

const mapStateToProps = state => ({
    billData: state.formData.billData
})
const mapDispatchToprops = dispatch =>({
    paymentForm: () => dispatch(paymentForm()),
    verificationForm: () => dispatch(verificationForm()),
    setTXREF: data => dispatch(setTXREF(data)),
    setError: data => dispatch(setError(data))
})
export default connect(mapStateToProps,mapDispatchToprops)(PaymentForm)