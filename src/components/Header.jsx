import { UserContext } from "../context/User";
import { useContext } from "react";


const Header = () => {
    const { loggedInuser } = useContext(UserContext)
    return (
        <header>
            <h1>Welcome to NC News</h1>
            <section>
                <p>{loggedInuser}</p>
            </section>
        </header>
    )
}

export default Header;
