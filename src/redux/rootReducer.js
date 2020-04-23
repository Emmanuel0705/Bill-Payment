import {combineReducers} from 'redux'
import componentReducer from './reducers/component.reducer'
import {persistReducer} from "redux-persist"
import storage from "redux-persist/lib/storage"
import formDataReducer from './reducers/formData'
import errorReducer from './reducers/error.reducer'

const options = {
    key:'root',
    storage,
    whitelist:['component','formData']
}
const rootReducer = combineReducers({
    component:componentReducer,
    formData:formDataReducer,
    error:errorReducer
})

export default persistReducer(options,rootReducer)