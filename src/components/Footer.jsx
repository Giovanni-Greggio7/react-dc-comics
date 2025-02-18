import facebook from "../assets/img/footer-facebook.png"
import twitter from "../assets/img/footer-twitter.png"
import youtube from "../assets/img/footer-youtube.png"
import pinterest from "../assets/img/footer-pinterest.png"
import periscope from "../assets/img/footer-periscope.png"
import dc_logo from "../assets/img/dc-logo-bg.png"

const Footer = () => {
    return (
        <footer >
            <section className="container">
                <ul>
                    <li className="lista-header"><h2>DC COMICS</h2></li>
                    <li><a href="#">Characters</a></li>
                    <li><a href="#">Cosmetics</a></li>
                    <li><a href="#">Movies</a></li>
                    <li><a href="#">TV</a></li>
                    <li><a href="#">Games</a></li>
                    <li><a href="#">Videos</a></li>
                    <li><a href="#">News</a></li>
                    <li className="lista-header"><h2>SHOP</h2></li>
                    <li><a href="#">Shop DC</a></li>
                    <li><a href="#">Shop DC Collectibles</a></li>
                </ul>
                <ul>
                    <li className="lista-header"><h2>DC</h2></li>
                    <li><a href="#">Terms Of Use</a></li>
                    <li><a href="#">Privacy Policy(new)</a></li>
                    <li><a href="#">Ad Choices</a></li>
                    <li><a href="#">Advertising</a></li>
                    <li><a href="#">Jobs</a></li>
                    <li><a href="#">Subscriptions</a></li>
                    <li><a href="#">Talent Workshops</a></li>
                    <li><a href="#">CPSC Certificates</a></li>
                    <li><a href="#">Ratings</a></li>
                    <li><a href="#">Shop Help</a></li>
                    <li><a href="#">Contact Us</a></li>

                </ul>
                <ul>
                    <li className="lista-header"><h2>Sites</h2></li>
                    <li><a href="#">DC</a></li>
                    <li><a href="#">MAD Magazine</a></li>
                    <li><a href="#">DC KIds</a></li>
                    <li><a href="#">DC Universe</a></li>
                    <li><a href="#">DC Power Visa</a></li>

                </ul>
                <img src={dc_logo} alt="" />

            </section>
            <div className="bg-black">
                <div className="container footer-icone">
                    <ul>
                        <li><a className="button" href="#">SIGN UP NOW!</a></li>
                    </ul>
                    <ul className="social-logos">
                        <li className="list-header-footer"><a href="#"></a><h2>FOLLOW US</h2></li>
                        <li><a href="#"><img src={facebook} alt="" /></a></li>
                        <li><a href="#"><img src={twitter} alt="" /></a></li>
                        <li><a href="#"><img src={youtube} alt="" /></a></li>
                        <li><a href="#"><img src={pinterest} alt="" /></a></li>
                        <li><a href="#"><img src={periscope} alt="" /></a></li>
                    </ul>
                    
                </div>


            </div>

        </footer>
    )
}

export default Footer