import { createContext, useReducer } from "react";

export const VehiclesContext = createContext();

export const vehiclesReducer = (state, action) =>{
    switch (action.type){
        case 'SET_VEHICLES':
            return {
                vehicles: action.payload
            }
        case 'CREATE_VEHICLES':
            return{
                vehicles: [action.payload,...state.vehicles]
            }
        default:
            return state
    }
}
export const VehiclesContextProvider = ({children}) =>{
    const [state, dispatch] = useReducer(vehiclesReducer,{
        vehicles: null
    })

    
    return(
        <VehiclesContext.Provider value={{...state, dispatch}}>
            {children}
        </VehiclesContext.Provider>
    )
}

