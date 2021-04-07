import React, { createContext, useReducer } from 'react'

export const Actions = Object.freeze({
    SET_USER:   "SET_USER"
});


const initialState = {
    "user": {}
}

const Reducer = (state, action) => {
    switch (action.type) {

        case Actions.SET_USER:
            return { ...state, user: action.payload };

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