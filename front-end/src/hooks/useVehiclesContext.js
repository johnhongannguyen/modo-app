import { VehiclesContext } from "../context/VehicleContext";
import { useContext } from "react";

export const useVehiclesContext = () =>{
    const context = useContext(VehiclesContext)

    if(!context) {
        throw Error('useVehiclesContext must be used inside a VehiclesContextProvider')
    }
    return context;
}