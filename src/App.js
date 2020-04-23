import React from 'react';
import './App.css';
import Main from './Components/Main'
import {Provider} from 'react-redux'
import {store,persistor} from './redux/store';
import { PersistGate } from 'redux-persist/integration/react'
import {Route,Router,BrowserRouter} from "react-router-dom"
import Success from "./Components/success"

function App() {
  return (
   <Provider store={store}>
     <PersistGate persistor={persistor}>
       
        <div className="App">
          <BrowserRouter>
         
             <Route exact path='/' component={Main}/>
             <Route  path='/success' component={Success}/>
           
          </BrowserRouter>
          
      
        </div>
     </PersistGate>
   </Provider>
  );
}

export default App;
