import { UserContext } from "../context/User";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";

export const LogInPage = () => {
    const { loggedInUser } = useContext(UserContext)

    if (!loggedInUser) {
        return (
            <Navigate to="/login" />
        )
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-xs-12">
                    <div className="mt-4 p-5 rounded bg-light">
                        <h1 className="display-5">
                            Hello {loggedInUser?.name}
                        </h1>
                        <p className="lead">
                            View my <Link to={`/users/${loggedInUser?.username}`}>articles</Link>.
                        </p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default LogInPage