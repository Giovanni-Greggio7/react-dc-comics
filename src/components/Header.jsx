import logo from "../assets/img/dc-logo.png"
import Navbar from "./Navbar"

const Header = (props) => {

    return (
        <header className="container d-flex justify-content-between align-items-center py-3">
            <figure>
                <img src={logo} alt="logo" />
            </figure>
            <Navbar links={props.links}/>
        </header>
    )

}

export default Header