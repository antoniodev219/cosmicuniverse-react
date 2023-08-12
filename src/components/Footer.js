import logo from "../assets/img/logo.png";
import discord from "../assets/img/icons/discord.svg";
import instagram from "../assets/img/icons/instagram.svg";
import redditAlien from "../assets/img/icons/reddit-alien.svg";
import telegram from "../assets/img/icons/telegram.svg";
import twitter from "../assets/img/icons/twitter.svg";
import youtube from "../assets/img/icons/youtube.svg";
import {Nav} from "react-bootstrap";
import {NavHashLink} from "react-router-hash-link";

const Footer = () => {
    return (
        <>
            <footer id="footer" className="footer_area">
                <div className="footer-top">
                    <div className="container py-5 ">
                    <div className="row">
                        <div className="col-sm-12 mb-5">
                            <div className="d-md-flex">
                                <div className="me-md-auto text-center text-md-start">
                                    <div className="copyright">
                                        <h2 className="logo me-auto"><a href="/"><img className="me-3 img-fluid" src={logo} alt=""/><span className="text-white">Cosmic Universe</span></a></h2>
                                    </div>
                                </div>
                                <div className="social-links text-center text-md-right pt-3 pt-md-0">
                                    <a href="https://www.reddit.com/r/cosmic" target="_blank" rel="noreferrer"><img src={redditAlien} alt="redditAlien"/></a>
                                    <a href="https://discord.gg/cosmic-universe" target="_blank" rel="noreferrer"><img src={discord} alt="discord"/></a>
                                    <a href="https://twitter.com/thecosmicguild" target="_blank" rel="noreferrer"><img src={twitter} alt="twitter"/></a>
                                    <a href="https://www.youtube.com/c/CosmicUniverseGame" target="_blank" rel="noreferrer"><img src={youtube} alt="youtube"/></a>
                                    <a href="https://www.instagram.com/cosmic.universe.one" target="_blank" rel="noreferrer"><img src={instagram} alt="instagram"/></a>
                                    <a href="https://t.me/cosmicuniversegame" target="_blank" rel="noreferrer"><img src={telegram} alt="telegram"/></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 text-center text-md-start">
                            <h5 className="nav-title">Explore</h5>
                            <Nav className="flex-column">
                                <Nav.Link className="nav-link scrollto" href="/#land-sale">Land NFTs</Nav.Link>
                                <Nav.Link className="nav-link scrollto" href="/#character-nft">Characters NFTs</Nav.Link>
                                <Nav.Link href="https://marketplace.cosmicuniverse.one/">Marketplace</Nav.Link>
                                <Nav.Link target="_blank" href="https://medium.com/@thecosmicuniverse" rel="noreferrer">News</Nav.Link>
                            </Nav>
                        </div>
                        <div className="col-md-6 col-lg-4 text-center text-md-start mt-5 mt-md-0">
                            <h5 className="nav-title">Company and Legal</h5>
                            <Nav className="flex-column">
                                <NavHashLink className="nav-link" to="community-guidelines">Community Guidelines</NavHashLink>
                                <NavHashLink className="nav-link" to="terms-of-use">Terms of use</NavHashLink>
                                <NavHashLink className="nav-link" to="privacy-policy">Privacy policy</NavHashLink>
                                <Nav.Link href="https://drive.google.com/drive/folders/1jfP-va2P48aluq5rtCtuFgpgGZy2W2uY?usp=sharing" target="_blank">Press kit</Nav.Link>
                            </Nav>
                        </div>
                    </div>
                </div>
                </div>
                <div className="container d-md-flex py-4 footer-bottom">
                    <div className="me-md-auto text-center text-md-start">
                        <div className="copyright">
                            © Copyright 2022 <strong><span>Cosmic Universe</span></strong>. All Rights Reserved
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Footer;