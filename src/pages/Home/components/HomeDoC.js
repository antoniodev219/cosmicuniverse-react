import React from "react";
import { Container } from "react-bootstrap";
import logo_text from "../../../assets/img/main-logo-text.png";
import bg_map from "../../../assets/img/doc/map.png";

const HomeDoC = () => {
  return (
    <section id="home-doc">
      <div className="home-doc-content">
        <Container fluid>
          <div className="logo-wrapper text-center">
            <img
              src={logo_text}
              className="logo-text mb-1"
              width="100%"
              alt="logo"
            />
            <h1 className="home-doc-title mb-0">dawn of crypton</h1>
            <h6 className="home-doc-desc mb-0">
              A <b>prequel</b> to the Cosmic Universe MMORPG
            </h6>
          </div>
          <div className="main-wrapper d-flex align-items-center">
            <div className="main-item-text text-center px-5">
              <h2>
                start your <br />
                <b>adventure</b>
              </h2>
              <h6 className="home-doc-desc">
                earn resources, tools & unique rewards
              </h6>
            </div>
            <div className="main-item-img text-center">
              <img
                src={bg_map}
                className="home-doc-img"
                width="100%"
                alt="map"
              />
            </div>
            <div className="main-item-text text-center px-5">
              <h2>
                available for <br />
                download <b>soon</b>
              </h2>
              <a
                href="https://cosmicuniverse.io/dawn-of-crypton"
                aria-label="more"
              >
                <div className="link-btn d-flex align-items-center justify-content-center mt-4 m-auto">
                  <h6 className="home-doc-desc mb-0">more Information</h6>
                </div>
              </a>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default HomeDoC;
