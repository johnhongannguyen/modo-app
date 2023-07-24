import { useAuthContext } from './useAuthContext';
import { useVehiclesContext } from './useVehiclesContext';

export const useLogout = () => {
  const { dispatch } = useAuthContext()
  const {dispatch: vehiclesDispatch} = useVehiclesContext()

  const logout = () => {
    // remove user from storage
    localStorage.removeItem('user')

    // dispatch logout action
    dispatch({ type: 'LOGOUT' })
    vehiclesDispatch({type: 'SET_VEHICLES', payload: null})
  }

  return { logout }
}