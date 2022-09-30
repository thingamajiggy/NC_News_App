import axios from "axios";
import { useContext, useEffect, useState } from "react"
import { UserContext } from "../contexts/User";

const articlesApi = axios.create({
    baseURL: "https://myfirstbackendproject.herokuapp.com/api"
})

const User = () => {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { setLoggedInUser } = useContext(UserContext)

    useEffect(() => {
        articlesApi.get("/users")
        .then((users) => {
            setUsers(users);
            setIsLoading(false);
        })
    }, []);

    if (isLoading) {
        return <p>Loading</p>
    }
    return (
        <ul>
            {users.map((user) => {
                return (
                    <li key={user.username}>
                        <p>{user.name}</p>
                        <button onClick={() => setLoggedInUser(user)}></button>
                    </li>
                );
            })}
        </ul>
    );
};

export default User;