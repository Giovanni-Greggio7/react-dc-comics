import logo from "../assets/img/dc-logo.png"

const Header = () => {

    return (
        <header className="container d-flex justify-content-between align-items-center py-3">
        <figure>
            <img src={logo} alt="logo" />
        </figure>
        <nav>
            <ul className="breadcrumb d-flex gap-3">
                <li className="text-body-tertiary"><a href="#">CHARACTERS</a></li>
                <li><a href="#">COMICS</a></li>
                <li><a href="#">MOVIES</a></li>
                <li><a href="#">TV</a></li>
                <li><a href="#">GAMES</a></li>
                <li><a href="#">COLLECTIBLES</a></li>
                <li><a href="#">VIDEOS</a></li>
                <li><a href="#">FANS</a></li>
                <li><a href="#">NEWS</a></li>
                <li><a href="#">SHOP</a></li>
            </ul>
        </nav>
    </header>
)
    
}

export default Header