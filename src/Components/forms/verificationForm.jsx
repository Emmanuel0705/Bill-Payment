import React,{useState} from "react"
import {connect} from 'react-redux'
import { home,verificationForm } from "../../redux/actions/component.action"
import validateOTP from '../../util/validateOTP'
import {setError} from '../../redux/actions/error.action'

const VerificationForm = ({txref,verificationForm,home,setError}) => {
        const [formData,setFormData] = useState({otp:""
        })
        const setData = e => setFormData({...formData,[e.target.name]:e.target.value})
        const onSubmit = async e => {
             e.preventDefault()             
             const res = await validateOTP(txref,formData.otp)
    
             if(res.body.status === "error"){
                setError(res.body.message)
                console.log(res.body.message)
            }else{
               
               verificationForm()
               home()
            }
             console.log("final res",res)
    
            // paymentForm()
        }
    
return ( 
    <div className="card">
         <form onSubmit={(e) => onSubmit(e)}>
             <div>
              <h1>OTP VERIFICATION</h1>
                 <hr/>
                 <div>
                     <input value={formData.otp} name="otp" required type="text"
                      placeholder="OTP" onChange={e => setData(e)}/>
                     
                       
                     <button className="form-btn" type="submit"
                  >Click</button>
                 </div>
                 <hr/>
                 
             </div>
         </form>

    </div>
) 
   
}

const mapDispatchToprops = dispatch =>({
    verificationForm: () => dispatch(verificationForm()),
    home: () => dispatch(home()),
    setError: msg => dispatch(setError(msg))
})
const mapStateToprops = state =>({
    txref: state.formData.TXREF
})

export default connect(mapStateToprops,mapDispatchToprops)(VerificationForm)