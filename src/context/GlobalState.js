import React,{createContext,useReducer} from "react";
import AppReducer from './AppReducer'

//Initial State
const initaiState = {
    transaction: [
    ]
}

//Create context
export const GlobalContext = createContext(initaiState);


//provider components
export  const GlobalProvider = ({children}) => {
    const [state,dispatch] = useReducer(AppReducer , initaiState);

//action
function deletetransaction(id){
    dispatch({
        type: 'DELETE_TRANSACTION',
        payload:id
    });
}

function addtransaction(transaction){
    dispatch({
        type: 'ADD_TRANSACTION',
        payload:transaction
    });
}

    return (<GlobalContext.Provider value={{
        transaction:state.transaction,
        deletetransaction,
        addtransaction
        }}>
        {children}
    </GlobalContext.Provider>);
} 