import { useContext } from "react";
import { UserContext } from "../contexts/User";
import User from "./User";

const Header = () => {
    const { loggedInUser } = useContext(UserContext);
    return (
        <header>
            <h1>Welcome to NC News</h1>
        <section>
        <User />
        </section>
        </header>
    );
};

export default Header;
