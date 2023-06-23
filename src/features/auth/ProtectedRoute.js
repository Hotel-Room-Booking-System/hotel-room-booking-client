import { useLocation, Navigate, Outlet } from "react-router-dom"
import { getRoles,isAuth } from "./authSlice"
import { useSelector } from "react-redux"

const ProtectedRoute = ({allowedRoles}) => {

    const location = useLocation()
    const auth = useSelector(isAuth)
    const roles = useSelector(getRoles)

  return (
        auth && roles.find(role => allowedRoles.includes(role))?
        <Outlet/> : auth ? 
        <Navigate to = '/unauthenticated' state={{from : location}} replace/>
        :
        <Navigate to = '/login' state={{from : location}} replace/>
  )
}

export default ProtectedRoute