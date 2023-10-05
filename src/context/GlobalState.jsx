/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

const initialState = {
    transactions : []
}

export const Context = createContext();

// CustomHook
export const useGlobalState = () => {
    const context  = useContext(Context);
    return context;
}

export const GlobalProvider = ({ children }) => {
    const [ state, dispatch ] = useReducer( AppReducer, initialState,
        () => {
            const localData = localStorage.getItem('transactions')
            // Ternario
            return localData ? JSON.parse(localData) : initialState
        });

    useEffect(() => {
        localStorage.setItem('transactions', JSON.stringify(state))
    }, [state])
    
    // Agregar Transaccion 
    const addTransaction = (transaction) => {
        console.log('addTransaction')
        dispatch({
            type: "ADD_TRANSACTION",
            payload: transaction
        })
    }
    
    // Eliminar Transaccion
    const deleteTransaction = (id) => {
        console.log('deleteTransaction')
        dispatch({
            type: "DELETE_TRANSACTION",
            payload: id
        })
    }

    return(
        <Context.Provider 
            value={{
                transactions: state.transactions, 
                addTransaction,
                deleteTransaction
            }}>
            {children}
        </Context.Provider>
    )
}

