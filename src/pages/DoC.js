import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper";
import "swiper/swiper.min.css";
import "swiper/modules/effect-fade/effect-fade.min.css";
import { Col, Container, Row } from "react-bootstrap";
import logo_text from "../assets/img/main-logo-text.png";
import bg_map from "../assets/img/doc/map.png";
import game_carpentry from "../assets/img/doc/carpentry.png";
import game_herbalism from "../assets/img/doc/herbalism.png";
import game_crystal from "../assets/img/doc/crystal.png";
import game_elves from "../assets/img/doc/elves.png";
import download_android from "../assets/img/android.svg";
import download_windows from "../assets/img/windows.svg";
import gropup_potions from "../assets/img/doc/potions.png";
import group_resources from "../assets/img/doc/resources.png";
import group_rewards from "../assets/img/doc/rewards.png";
import group_tools from "../assets/img/doc/tools.png";
import opensea from "../assets/img/opensea.svg";

const DoC = () => {
  const sectionList = [
    {
      title: "tools",
      image: group_tools,
      description:
        "Each character Profession will have its own unique Profession Tools. With these tools, players can unlock exclusive resources, items, and buildable structures, as well as open up new gameplay experiences. Rarer and sturdier tools will also be rewarded during gameplay.",
    },
    {
      title: "resources",
      image: group_resources,
      description:
        "Resources not found in the wild in Cosmic Universe can be unlocked by specific Professions. Each Profession provides an avenue to unique resources being unlocked and received, and usable in the MMORPG.",
    },
    {
      title: "potions & elixirs",
      image: gropup_potions,
      description:
        "Potions allow players to perform feats such as decrease time to complete Expeditions and increase the chances of completing an Expedition. Elixirs may increase the amount of rewards a player receives or can guarantee the winning of certain items.",
    },
    {
      title: "rewards",
      image: group_rewards,
      description:
        "Numerous and varied rewards are winnable within Dawn of Crypton, many of which are transferable to the Cosmic Universe MMORPG.",
    },
  ];

  return (
    <section id="doc">
      <div className="doc-content">
        <Container>
          <div className="logo-wrapper text-center">
            <img
              src={logo_text}
              className="logo-text mb-1"
              width="100%"
              alt="logo"
            />
            <h1 className="doc-title mb-0">dawn of crypton</h1>
            <h6 className="doc-desc mb-0">
              A <b>prequel</b> to the Cosmic Universe MMORPG
            </h6>
            <a href="#download" aria-label="download section">
              <div className="download-item-wrapper cursor-pointer d-flex align-items-center justify-content-center w-fit mt-5 mx-auto">
                <span className="fw-bold">download</span>
              </div>
            </a>
          </div>
          <Row className="basics-wrapper align-items-center">
            <Col xs={{ order: 2 }} lg={{ span: 6, order: 1 }}>
              <div>
                <h1 className="doc-title fw-bold mb-5">the basics</h1>
                <p className="mb-0">
                  Dawn of Crypton (DoC) is a 2D minigame prequel to the Cosmic
                  Universe MMORPG. Players using their Wizards, Elves, and Land
                  NFTs get the opportunity to gather resources and other
                  valuable items ahead of the release of our flagship MMORPG.
                  <br />
                  <br />
                  There are two major aspects, <b>Elven Adventures</b> and{" "}
                  <b>Profession Expeditions</b>, along with a few microgames
                  within the prequel gameplay experience. Players get to unlock
                  tokenized game assets (NFTs) that will be transferrable and
                  usable in the MMORPG.
                </p>
                <div className="separator m-auto mt-5 d-block d-sm-block d-md-none"></div>
              </div>
            </Col>
            <Col xs={{ order: 1 }} lg={{ span: 6, order: 2 }}>
              <img src={bg_map} className="img-map" width="100%" alt="logo" />
            </Col>
          </Row>

          <Row className="game-wrapper align-items-center">
            <Col lg="6">
              <Swiper
                spaceBetween={30}
                centeredSlides={true}
                effect="fade"
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay, EffectFade]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <img
                    src={game_elves}
                    width="100%"
                    className="game-img"
                    alt="logo"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={game_carpentry}
                    width="100%"
                    className="game-img"
                    alt="logo"
                  />
                </SwiperSlide>
              </Swiper>
            </Col>
            <Col lg="6">
              <div className="game-adventures">
                <h1 className="doc-title fw-bold mb-5">elven adventures</h1>
                <p className="mb-0">
                  The Cosmic Elves that are being woken from their slumber are
                  being tasked with the preparation of the island of Aelfaria.
                  Elves can undertake adventures to Aelfaria to train for their
                  Professions (all 12 that Wizards can already train in) in
                  their native environment. The more advanced they become, the
                  longer each adventure will take.
                </p>
                <div className="game-adventures-btn-group d-flex align-items-center mt-5 px-3 px-md-0">
                  <a
                    href="https://marketplace.cosmicuniverse.io/mint"
                    target="_blank"
                    aria-label="mint"
                  >
                    <div className="download-item-wrapper cursor-pointer d-flex align-items-center justify-content-center w-fit">
                      <span className="fw-bold">mint</span>
                    </div>
                  </a>
                  <a
                    href="https://opensea.io/collection/cu-cosmic-elves"
                    target="_blank"
                    aria-label="mint"
                  >
                    <div className="download-item-wrapper cursor-pointer d-flex align-items-center justify-content-center w-fit">
                      <img
                        src={opensea}
                        className="me-2"
                        width="28"
                        height="28"
                        alt="opensea"
                      />
                      <span className="fw-bold">buy</span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="separator m-auto mt-5 d-block d-sm-block d-md-none"></div>
            </Col>
          </Row>

          <Row className="game-wrapper align-items-center">
            <Col xs={{ order: 1 }} lg={{ span: 6, order: 2 }}>
              <Swiper
                spaceBetween={30}
                centeredSlides={true}
                effect="fade"
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay, EffectFade]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <img
                    src={game_crystal}
                    width="100%"
                    className="game-img"
                    alt="logo"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={game_herbalism}
                    width="100%"
                    className="game-img"
                    alt="logo"
                  />
                </SwiperSlide>
              </Swiper>
            </Col>
            <Col xs={{ order: 2 }} lg={{ span: 6, order: 1 }}>
              <div className="game-profession">
                <h1 className="doc-title fw-bold mb-5">
                  profession expeditions
                </h1>
                <p className="mb-0">
                  Players can use their Wizards and Elves, along with land
                  plots, to embark on special expeditions where they begin
                  earning resources and materials for their chosen Professions.
                  These tokenized game assets (NFTs) will be transferrable to,
                  and usable in, the MMORPG.
                </p>
              </div>
              <div className="separator m-auto mt-5 d-block d-sm-block d-md-none"></div>
            </Col>
          </Row>

          <Row className="items-wrapper">
            {sectionList.map((section) => {
              return (
                <Col lg="6">
                  <div className="item-container">
                    <h1 className="doc-title fw-bold mb-0 text-center">
                      {section.title}
                    </h1>
                    <img
                      src={section.image}
                      width="100%"
                      className="my-5"
                      alt="item image"
                    />
                    <p className="mb-0">{section.description}</p>
                    <div className="separator m-auto mt-5 d-block d-sm-block d-md-none"></div>
                  </div>
                </Col>
              );
            })}
          </Row>

          <Row className="download-wrapper text-center" id="download">
            <div className="mb-5">
              <h1 className="doc-title fw-bold mb-5">download</h1>
              <p>Currently Dawn of Crypton is compatible with platforms:</p>
            </div>
            <div className="download-items-group d-flex align-items-center justify-content-center">
              <div className="download-item">
                <img src={download_android} height="42px" alt="logo" />
                {/* <a href="#" target="_blank" aria-label="android">
                  <div className="download-item-wrapper cursor-pointer d-flex align-items-center justify-content-center mt-4">
                    <span className="fw-bold">download for android</span>
                  </div>
                </a> */}
                <a target="_blank" aria-label="android">
                  <div className="download-item-wrapper cursor-disabled d-flex align-items-center justify-content-center mt-4">
                    <span className="fw-bold">download for android</span>
                  </div>
                </a>
              </div>
              <div className="download-item">
                <img src={download_windows} height="42px" alt="logo" />
                {/* <a href="#" target="_blank" aria-label="windows">
                  <div className="download-item-wrapper cursor-pointer d-flex align-items-center justify-content-center mt-4">
                    <span className="fw-bold">download for windows</span>
                  </div>
                </a> */}
                <a target="_blank" aria-label="windows">
                  <div className="download-item-wrapper cursor-disabled d-flex align-items-center justify-content-center mt-4">
                    <span className="fw-bold">download for windows</span>
                  </div>
                </a>
              </div>
            </div>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default DoC;
