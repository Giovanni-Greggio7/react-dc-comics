import digital from "../assets/img/buy-comics-digital-comics.png"
import merchandise from "../assets/img/buy-comics-merchandise.png"
import subscriptions from "../assets/img/buy-comics-subscriptions.png"
import shopLocator from "../assets/img/buy-comics-shop-locator.png"
import visa from "../assets/img/buy-dc-power-visa.svg"

const Main = () => {

    return (
        <main>
            <div className="bg-black py-3">
                <div className="container">
                    <h3>--Content goes Here--</h3>
                </div>
            </div>
            <div className="d-flex justify-content-around py-3 bg-primary py-4">
                <div className="d-flex align-items-center gap-3">
                    <img src={digital} height={"80px"} alt="logo"/>
                    <p>DIGITAL COMICS</p>
                </div>
                <div className="d-flex align-items-center gap-3">
                    <img src={merchandise} height={"80px"} alt="logo"/>
                    <p>DC MERCHANDISE</p>
                </div>
                <div className="d-flex align-items-center gap-3">
                    <img src={subscriptions} height={"80px"} alt="logo"/>
                    <p>SUBSCRIPTION</p>
                </div>
                <div className="d-flex align-items-center gap-3">
                    <img src={shopLocator} height={"80px"} alt="logo"/>
                    <p>SHOP LOCATOR</p>
                </div>
                <div className="d-flex align-items-center gap-3">
                    <img src={visa} height={"60px"} alt="logo"/>
                    <p>VISA</p>
                </div>
            </div>
            <div className="backimage">
                <div className="d-flex justify-content-around">
                  <div className="d-flex flex-column">
                    <h5>DC COMICS</h5>
                    <ul className="breadcrumb d-flex flex-column gap-3">
                        <li><a href="#">CHARACTERS</a></li>
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
                    <h5>DC COMICS</h5>
                    <ul className="breadcrumb d-flex flex-column gap-3">
                        <li><a href="#">CHARACTERS</a></li>
                        <li><a href="#">COMICS</a></li>
                    </ul>
                  </div>

                </div>
            </div>
            
        </main>
    )
}

export default Main