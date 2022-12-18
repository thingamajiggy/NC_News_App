import axios from "axios";
import { UserContext } from "../context/User";
import { useContext, useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";

const User = () => {
    const [selectedUser, setSelectedUser] = useState();
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { setLoggedInUser } = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("/users")
        .then((res) => {
            setUsers(res.data.users);
            setIsLoading(false);
        })
    }, []);

    if (isLoading) {
        return <p>Loading</p>
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-xs-12 col-sm-4">
                    <div className="card mt-5">
                        <h1 className="card-header h3">
                            Login
                        </h1>
                        <div className="card-body">
                            <div className="form-group">
                                <select className="form-select" onChange={(event) => {
                                    const selectedUser = users.find(({ username }) => {
                                        return username === event.target.value;
                                    })
                                    setSelectedUser(selectedUser)
                                }}>
                                    <option value=""></option>
                                    {users.map((user, i) => {
                                        return (
                                            <option value={user.username} key={user.username}>
                                                {user.name}
                                            </option>
                                        )
                                    })}
                                </select>
                            </div>
                            <button disabled={!selectedUser} className="btn btn-primary mt-3" onClick={() => {
                                setLoggedInUser(selectedUser)
                                navigate("/loggedin")
                            }}>
                                Sign in
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default User