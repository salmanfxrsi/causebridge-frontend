/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate } from "react-router-dom";
import Loading from "../components/Loading";

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    if(loading) return <div className="py-24"><Loading /></div>

    if(user) return children;
    
    return <Navigate to={'/login'}></Navigate>
};

export default PrivateRoutes;