import axios from "axios";
import { useContext, useEffect, useState } from "react"
import { UserContext } from "../contexts/User";

const articlesApi = axios.create({
    baseURL: "https://myfirstbackendproject.herokuapp.com/api"
})

const User = () => {
    const [selectedUser, setSelectedUser] = useState();
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { setLoggedInUser } = useContext(UserContext);

    useEffect(() => {
        articlesApi.get("/users")
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
        <select onChange={(ev) => {
            const selectedUser = users.find(({ username }) => username === ev.target.value)
            setSelectedUser(selectedUser)
        }}>
            {users.map((user, i) => {
                return (
                    <option value={user.username} key={user.username}>{user.name}</option>
                );
                
            })}
                
        </select>
        <button onClick={() => setLoggedInUser(selectedUser)}>welcome</button>
        </>
    );
};

export default User;