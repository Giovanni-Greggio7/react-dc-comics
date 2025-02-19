import digital from "../assets/img/buy-comics-digital-comics.png"
import merchandise from "../assets/img/buy-comics-merchandise.png"
import subscriptions from "../assets/img/buy-comics-subscriptions.png"
import shopLocator from "../assets/img/buy-comics-shop-locator.png"
import visa from "../assets/img/buy-dc-power-visa.svg"

const Main = () => {

    return (
        <main>
            <div className="bg-black py-5">
                <div className="container">
                    <h3>--Content goes Here--</h3>
                </div>
            </div>
            <div className="bg-primary py-4">
              <div className="container d-flex  justify-content-between py-3">
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
                
            </div>    
        </main>
    )
}

export default Main