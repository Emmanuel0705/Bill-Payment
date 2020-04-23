import React,{useState,useEffect} from "react"
import Action from "./selectAction"
import { withRouter} from "react-router-dom"
import {connect} from 'react-redux'
import {home} from '../redux/actions/component.action'
import BillForm from './billForm'
import PaymentForm from './forms/paymentForm'
import Verification from './forms/verificationForm'
import { Offline, Online } from "react-detect-offline";
import Iframe from 'react-iframe'
import { payBill } from "../redux/actions/formData.action"

const Main = ({billForm,paymentForm,verificationForm,home,error,location,payBill,data,history}) => {
    useEffect(() => {
        console.log('dd',data)
        if(location.search.includes("name")){
            payBill({...data,amount:3000,request_id:`pay-${Date.now()}`},history)
        }
    },[])
  
    const onChange = e => {
        setFormData({...formData,[e.target.name]:e.target.value})
    }
    const onSubmit = e => {
        e.preventDefault();
               
    }
    const LeftContainer = () => {
        if(billForm) {console.log(location.search,'rrrr'); return <BillForm/>}
        if(location.search.includes("name")) console.log(location.search,"iin")
        if(paymentForm) return <Iframe url="https://paystack.com/pay/4w3rlopr4j"
        className="iframe"
        display="initial"/>
        if(verificationForm) return <Verification/>
        return <Action/>
    }
    const [formData,setFormData] = useState({billForm:false,avgDailyIncomeInUSD:"",
        avgDailyIncomePopulation:"",avgAge:"",population:"",reportedCases:"",periodType:"days",
    timeToElapse:"",totalHospitalBeds:""})
    {
        return (
            <div className="container">          
              <div className="main-card">           
                 <div className="leftcontact">
                     <button className="form-btn" onClick={() => home() }>HOME</button>
                 </div>    
                 <div className="rightcontact">
                     <Online>
                         {error ? <div> {error} </div>: ""  }                     
                          {<LeftContainer/>}
                     </Online>
                     <Offline>
                         <h1>No INternet Connection</h1>
                     </Offline>
                     
                     
                     
                 </div>
              </div>        
           </div>
        )
    }   
}
const mapStateToProps = state => ({
    billForm:state.component.billForm,
    paymentForm:state.component.paymentForm,
    verificationForm:state.component.verificationForm,
    error:state.error.errorMsg,
    data:state.formData.verifyResult
})
const mapDispatchToprops = dispatch =>({
    home: () => dispatch(home()),
    payBill: (data,history) => dispatch(payBill(data,history))
})
export default connect(mapStateToProps,mapDispatchToprops)(withRouter(Main))