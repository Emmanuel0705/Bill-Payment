import React from "react"
import {connect} from 'react-redux'
import {billForm} from '../redux/actions/component.action'

const Action = (props) => {
    
return ( 
    <div >
        <div className="ikj" onClick={() => props.billForm()}>
            <h3>Bill Payment</h3>
        </div>
        <div className="vtu">
          <h3>Buy Airtime</h3>
        </div>
    </div>
) 
   
}

// const mapStateToProps = state => ({
//     result:state.result.estimationResult
// })
const mapDispatchToprops = dispatch =>({
    billForm: () => dispatch(billForm())
})
export default connect(null,mapDispatchToprops)(Action)