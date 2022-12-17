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
        <>
        <select onChange={(event) => {
            const selectedUser = users.find(({ username }) => {
                return username === event.target.value;
            })
            setSelectedUser(selectedUser)
        }}>
            {users.map((user, i) => {
                return (
                    <option value={user.username} key={user.username}>
                        {user.name}
                    </option>
                )
            })}
        </select>
        <button onClick={() => {
        setLoggedInUser(selectedUser)
        navigate("/loggedin")
        }}>Sign in</button>
        </>
    )
}

export default User