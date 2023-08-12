import LazyLoad from 'react-lazyload'
import banner from '../../../assets/img/main-logo.png'
import land_nft from '../../../assets/img/land_nft.png'
import character_nft from '../../../assets/img/character_nft.png'
import { NavHashLink } from "react-router-hash-link";
import WindowsSVG from '../../../assets/img/icons/windows.svg';

const launcherLink = "https://r2.cosmicuniverse.io/Cosmic%20Universe%20Launcher%20Setup.exe"
const Banner = () => {

  return (
    <section id="hero">
      <video autoPlay muted loop id="myVideo">
        <source src="https://r2.cosmicuniverse.io/banner_video.mp4" type="video/mp4" />
      </video>
      <div className="hero-container">
        <LazyLoad once>
          <img className="logo-img" src={banner} alt=""/>
        </LazyLoad>
        <div className="w-100 mr-2 d-flex align-items-center justify-content-center flex-column flex-md-row">
          <a className="btn-test" href={launcherLink} target="_blank" rel="noreferrer">
            <span className="btn">
            <img width="32" className="darkHover" src={WindowsSVG} alt="windows" style={{ paddingRight: '10px', paddingBottom: '3px' }} />
              PLAY DEMO
            </span>
          </a>
          <span className="text-white mx-4 my-2">Or</span>
          <a className="btn-test" href="https://marketplace.cosmicuniverse.io/mint" target="_blank" rel="noreferrer">
            <span className="btn">
              MINT ELVES
            </span>
          </a>
        </div>
        <div className="container mt-5">
          <div className="row justify-content-center">
            <div className="col-6 col-md-6 col-lg-4">
              <NavHashLink to="/nfts" className="item">
                <div className="item-img">
                  <LazyLoad once>
                    <img src={land_nft} alt="land nft" className="img-fluid" />
                  </LazyLoad>
                </div>
              </NavHashLink>
            </div>
            <div className="col-6 col-md-6 col-lg-4">
              <NavHashLink to="/nfts" className="item">
                <div className="item-img">
                  <LazyLoad once>
                    <img src={character_nft} alt="character nft"  className="img-fluid"/>
                  </LazyLoad>
                </div>
              </NavHashLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner;
