import { UserContext } from "../context/User";
import { useContext } from "react";


const Header = () => {
    const { loggedInuser } = useContext(UserContext)
    return (
        <div className="container">
            <div className="row">
                <div className="col-xs-12">
                    <header>
                        <h1 className="header-design">NC News</h1>
                        <section>
                            <p>{loggedInuser}</p>
                        </section>
                    </header>
                </div>
            </div>
        </div>
    )
}

export default Header;
