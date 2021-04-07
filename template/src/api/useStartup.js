import { AppContext } from '../store/appstore'
import { useContext } from 'react'

const useStartup = () => {
    const [state, dispatch] = useContext(AppContext)
    const readUser = async () => {
        try {
            const fetchData = { method: 'GET', headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' } }
            const response = await fetch(`api${process.env.REACT_APP_SAP_BC_UI2_STARTUP_URI}`, fetchData)
            const jsonresponse = await response.json()
            dispatch({ type: 'SET_USER', payload: jsonresponse })
        } catch (e) {
            throw new Error(`Call failed`)
        }
    }
    return { readUser }
}

export default useStartup