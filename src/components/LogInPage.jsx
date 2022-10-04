import { UserContext } from "../context/User";
import { useContext } from "react";
import { Navigate } from "react-router-dom";

export const LogInPage = () => {
    const { loggedInUser } = useContext(UserContext)

    if (!loggedInUser) {
        return (
            <Navigate to="/login" />
        )
    }

    return (
        <div>
            <p>Hello {loggedInUser?.name}</p>
        </div>
    )
}

export default LogInPage