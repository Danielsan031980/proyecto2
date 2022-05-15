import { Navigate } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";


export function BlockedRoute({children}) {
    const {user, loading } = useAuth();

    if (loading) return <h1>loading</h1>;

    if (!user) return <Navigate to="/" />

    return <>{children}</>


}