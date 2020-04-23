import React,{useState} from "react"
import {connect} from 'react-redux'
import { billForm, paymentForm } from "../redux/actions/component.action"
import { setBillData, verifyBill } from "../redux/actions/formData.action"
import {withRouter} from 'react-router-dom'
import propTypes from 'prop-types'

const BillForm = ({billForm,paymentForm,setBillData,verifyBill,history}) => {
    const [formData,setFormData] = useState({billersCode:"",variation_code:"",phone:"",serviceID:""})
    const setData = e => setFormData({...formData,[e.target.name]:e.target.value})
    const onSubmit = e => {
        e.preventDefault()
        const data = {billersCode:formData.billersCode,type:formData.variation_code,
            serviceID:formData.serviceID,phone:formData.phone,variation_code:formData.variation_code}
        verifyBill(data,history)
        setBillData(formData)
        // billForm()
        // paymentForm()
       
    }
  
return ( 
    <div className="card">
         <form onSubmit={e => onSubmit(e)}>
             <div>
                 <h1>Bill Form</h1>
                 <hr/>
                 <div>
                    
                     <input  value={formData.phone}
                      onChange={e => setData(e)}
                       required name="phone" type="number" placeholder="Phone Number" />
                      
                     
                        <input value={formData.billersCode} name="billersCode" required type="text"
                      placeholder="METER NUMBER" onChange={e => setData(e)}/>
                    
                       <select value={formData.serviceID} onChange={e => setData(e)}
                      required name="serviceID">
                         <option value="" disabled defaultValue>Select Region ......</option>
                         <option value="ikeja-electric" >Ikeja Electric</option>
                         <option value="eko-electric" >Eko Electric</option>
                     </select>
                       <select value={formData.variation_code} onChange={e => setData(e)}
                      required name="variation_code">
                         <option value="" disabled defaultValue>Select Meter Type......</option>
                         <option value="prepaid" >Prepaid</option>
                         <option value="postpaid" >Postpaid</option>
                     </select>
                     
                     <button className="form-btn" type="submit"
                  >Click</button>
                 </div>
                 <hr/>
                 
             </div>
         </form>

    </div>
) 
   
}
billForm.propTypes= {
    history: propTypes.func.isRequired
}

const mapDispatchToprops = dispatch =>({
    paymentForm: () => dispatch(paymentForm()),
    billForm: () => dispatch(billForm()),
    setBillData: data => dispatch(setBillData(data)),
    verifyBill: (data,history) => dispatch(verifyBill(data,history))
})
export default connect(null,mapDispatchToprops)(withRouter(BillForm))