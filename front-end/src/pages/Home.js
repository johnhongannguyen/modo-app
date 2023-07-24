import { useEffect } from "react";
import { useVehiclesContext } from '../hooks/useVehiclesContext';
import VehicleDetails from '../components/VehicleDetails';
import { useAuthContext } from "../hooks/useAuthContext";


const Home = () =>{
    const {vehicles, dispatch} = useVehiclesContext();
    const {user} = useAuthContext();


    useEffect(()=>{
        const fetchVehicles = async() =>{
            const response = await fetch('/api/vehicles',{
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            });
            const json = await response.json();

            if(response.ok){
               dispatch({type:'SET_VEHICLES', payload: json})
            }
        }
        if(user){
            fetchVehicles();

        }
    },[dispatch])
    return(
        <div className="Home">
            
         <div className="vehicles">
            {vehicles && vehicles.map((vehicle)=> (
                <VehicleDetails key={vehicle._id} vehicle={vehicle} />
            ))}
         </div>
            </div>
    )
}

export default Home;