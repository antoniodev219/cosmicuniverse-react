import logo from "../assets/img/logo.png";
import { NavHashLink } from "react-router-hash-link";
import { detect } from "detect-browser";
import { useMemo } from "react";

const Navigation = () => {
  const detected = detect();
  const isWindows = useMemo(
    () =>
      detected && detected.os
        ? detected.os.toLowerCase().startsWith("windows")
        : true,
    [detected]
  );
  return (
    <header id="header" className="fixed-top">
      <div className="container d-flex align-items-center">
        <h1 className="logo me-auto">
          <a href="/">
            <img className="img-fluid" src={logo} alt="" />
            <span>Cosmic Universe</span>
          </a>
        </h1>
        <nav id="navbar" className="navbar order-last order-lg-0">
          <ul>
            <li>
              <a
                className="nav-link"
                href="https://r2.cosmicuniverse.io/whitepaper.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Whitepaper
              </a>
            </li>
            <li>
              <a
                className="nav-link"
                href="https://cosmicuniverse.io/dawn-of-crypton"
              >
                {" "}
                Dawn of Crypton
              </a>
            </li>
            <li>
              <a
                className="nav-link"
                href="https://marketplace.cosmicuniverse.io/"
              >
                {" "}
                Marketplace
              </a>
            </li>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <li className="dropdown">
              <a className="nav-link" href="#">
                <span>Assets</span> <i className="fa fa-chevron-down" />
              </a>
              <ul>
                <li>
                  <NavHashLink to="tokens">Tokens</NavHashLink>
                </li>
                <li>
                  <NavHashLink to="nfts">NFTs</NavHashLink>
                </li>
              </ul>
            </li>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <li className="dropdown">
              <a className="nav-link" href="#">
                <span>Community</span> <i className="fa fa-chevron-down" />
              </a>
              <ul>
                <li>
                  <a
                    target="_blank"
                    href="https://discord.gg/cosmic-universe"
                    rel="noreferrer"
                  >
                    Discord
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://twitter.com/thecosmicguild"
                    rel="noreferrer"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://t.me/cosmicuniversegame"
                    rel="noreferrer"
                  >
                    Telegram
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://www.reddit.com/r/cosmic/"
                    rel="noreferrer"
                  >
                    Reddit
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://www.youtube.com/c/CosmicUniverseGame"
                    rel="noreferrer"
                  >
                    Youtube
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://www.instagram.com/cosmic.universe.one"
                    rel="noreferrer"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </li>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <li className="dropdown">
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a className="nav-link" href="#">
                <span>More</span>
                <i className="fa fa-chevron-down" />
              </a>
              <ul>
                <li>
                  <a
                    className="nav-link"
                    target="_blank"
                    href="https://medium.com/@thecosmicuniverse"
                    rel="noreferrer"
                  >
                    News
                  </a>
                </li>
                <li>
                  <NavHashLink to="team">Team</NavHashLink>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://marketplace.cosmicuniverse.io/farm"
                    rel="noreferrer"
                  >
                    Farm
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://info.cosmicuniverse.io/"
                    rel="noreferrer"
                  >
                    Encyclopedia
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://marketplace.cosmicuniverse.io/market/land/map"
                    rel="noreferrer"
                  >
                    Map
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://game.cosmicuniverse.io/"
                    rel="noreferrer"
                  >
                    Play in Browser
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <i id="mobile-nav-toggle" className="fa fa-bars mobile-nav-toggle" />
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
