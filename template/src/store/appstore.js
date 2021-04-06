import React, { createContext, useReducer } from 'react'

const initialState = {
    "leverancierstablecolumns": [{ label: 'test' }, { label: 'product' }],
    "leveranciers": []
}



const Reducer = (state, action) => {
    switch (action.type) {

        case "SET_LEVERANCIERS":
            return { ...state, leveranciers: action.payload.d.results };

        default:
            return state;
    }
}



const Store = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, initialState)

    return (
        <AppContext.Provider value={[state, dispatch]}>
            {children}
        </AppContext.Provider>
    )
}


export const AppContext = createContext(initialState)
export default Store