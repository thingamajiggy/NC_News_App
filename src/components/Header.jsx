import { useContext } from "react";
import { UserContext } from "../contexts/User";

const Header = () => {
    const { loggedInUser } = useContext(UserContext);

    return (
        <header>
            <h1>Welcome to NC News</h1>
        <section>
            <p>{loggedInUser.username}</p>
        </section>
        </header>
    );
};

export default Header;
