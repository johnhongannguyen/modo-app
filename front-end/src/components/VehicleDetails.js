// import { useVehiclesContext } from '../hooks/useVehiclesContext'
// import { useAuthContext } from '../hooks/useAuthContext'

const VehicleDetails = ({vehicle}) =>{
//     const { dispatch } = useVehiclesContext()
//   const { user } = useAuthContext()

//   const handleClick = async () => {
//     if (!user) {
//       return
//     }

//     const response = await fetch('/api/workouts/' + vehicle._id, {
//       method: 'DELETE',
//       headers: {
//         'Authorization': `Bearer ${user.token}`
//       }
//     })
//     const json = await response.json()

//     return json;
//   }

    return(
        <div className="vehicle-details">
            <h5>Vehicle # :{vehicle._id}</h5>
            <h4>{vehicle.make}</h4>
            <p><strong>Vehicle Model </strong> {vehicle.model}</p>
            <p><strong>Vehicle Location</strong> {vehicle.location_description}</p>
        </div>
    )
}
export default VehicleDetails;