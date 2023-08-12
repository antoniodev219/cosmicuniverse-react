import {Col, Container, Row, Spinner} from "react-bootstrap";
import economy_1 from "../assets/img/overview/13.5-overlay.png";
import economy_2 from "../assets/img/overview/13.png";
import React, { useState, useEffect } from "react";
import COSMIC from "../contracts/cosmic"

const Cosmic = () => {
  const [burned, setBurned] = useState('')
  const [totalSupply, setTotalSupply] = useState('')
  const [mintable, setMintable] = useState('')
  const addToken = async () => {
    await window.ethereum.request({
      method: 'wallet_watchAsset',
      params: {
        type: 'ERC20',
        options: {
          address: COSMIC.ADDRESS,
          name: `Cosmic`,
          symbol: `COSMIC`,
          decimals: 18,
          image: "https://marketplace.cosmicuniverse.io/images/cosmic.png"
        }
      }
    })
  }

  useEffect(() => {
    const contract = COSMIC.Contract()
    const getTokenTotals = async () => {

    }


    getTokenTotals()

    const interval = setInterval(() => {
      getTokenTotals()
    }, 60000);
    return () => {
      clearInterval(interval);
    };
  }, [])
  return (
    <>
      <Container>
        <Row>
          <Col xs={12} xl={6}>
            <div className="d-flex align-items-center flex-wrap flex-sm-nowrap mb-3 justify-content-center">
              <div className="ms-3">
                <h3 className="mt-0" style={{ textAlign: "center" }}>Usage</h3>
                <ul>
                  <li><p className="mb-0">Single Staking</p></li>
                  <li><p className="mb-0">Accelerating build times</p></li>
                  <li><p className="mb-0">Accelerating energy replenishing</p></li>
                  <li><p className="mb-0">Beautification</p></li>
                  <li><p className="mb-0">Customizations</p></li>
                  <li><p className="mb-0">Activating land staking seeds</p></li>
                  <li><p className="mb-0">Upgrading land</p></li>
                  <li><p className="mb-0">Entering tournaments, festivals, and special events</p></li>
                </ul>
              </div>
            </div>
          </Col>
          <Col xs={12} xl={6}>
            <div className="d-flex align-items-center flex-wrap flex-sm-nowrap mb-3 justify-content-center">
              <div className="ms-3 w-75">
                <h3 className="mt-0" style={{ textAlign: "center" }}>Details</h3>
                <p>
                  The required COSMIC to unlock these elements within the game will then be burned,
                  while the rest can be kept by the player. Players can also simply gain more XP and
                  level-up to unlock in-game assets, meaning paying COSMIC is not required but it will
                  speed up the process of acquiring assets. COSMIC can be earned through various
                  in-game side quests, promotions, or tournaments.
                </p>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} xl={6}>
            <div className="d-flex align-items-center flex-wrap flex-sm-nowrap mb-3 justify-content-center">
              <div className="flex-shrink-0">
                <img src={economy_1} alt="economy_1" />
              </div>
              <div className="ms-3">
                <h3 className="mt-0" style={{ textAlign: "center" }}>Cosmic (Original)</h3>
                <Row>
                  <Col>
                    <p style={{ marginBottom: 0 }}>Token Cap</p>
                  </Col>
                  <Col>
                    <p style={{ textAlign: "right", marginBottom: 0 }}>1,000,000,000.000</p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <p style={{ marginBottom: 0 }}>Upgradable</p>
                  </Col>
                  <Col>
                    <p style={{ textAlign: "right", marginBottom: 0 }}>
                      {"loading..."}
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <p style={{ marginBottom: 0 }}>Burned</p>
                  </Col>
                  <Col>
                    <p style={{ textAlign: "right", marginBottom: 0 }}>
                      {"loading..."}
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <p className="mb-0" style={{ whiteSpace: "nowrap" }}>Initial Supply</p>
                  </Col>
                  <Col>
                    <p style={{ textAlign: "right", marginBottom: 0 }}>1,000,000.000</p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <p style={{ marginBottom: 0 }}>Initial Price</p>
                  </Col>
                  <Col>
                    <p style={{ textAlign: "right", marginBottom: 0 }}>$0.0001</p>
                  </Col>
                </Row>

              </div>
            </div>
          </Col>
          <Col xs={12} xl={6}>
            <div className="d-flex align-items-center flex-wrap flex-sm-nowrap mb-3 justify-content-center">
              <div className="flex-shrink-0">
                <img src={economy_2} alt="economy_2" />
              </div>
              <div className="ms-3">
                <h3 className="mt-0" style={{ textAlign: "center" }}>Cosmic</h3>
                <Row>
                  <Col>
                    <p>Token Cap</p>
                  </Col>
                  <Col>
                    <p style={{ textAlign: "right" }}>1,000,000,000.000</p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <p>Burned</p>
                  </Col>
                  <Col>
                    <p style={{ textAlign: "right" }}>
                      {"loading..."}
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <p>Upgraded</p>
                  </Col>
                  <Col>
                    <p style={{ textAlign: "right" }}>
                      {"loading..."}
                    </p>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="mb-5 mb-lg-2">
          <Col xs={12} sm={6} lg={3}>
            <div className="d-flex align-items-center flex-wrap flex-sm-nowrap mb-3 mt-3 justify-content-center justify-content-sm-end">
              <div className="ms-3">
                <h3 className="mt-0" style={{ textAlign: "center" }}>Balances</h3>
                <Row>
                  <Col>
                    <p>CosmicCoin</p>
                  </Col>
                  <Col>
                    <p style={{ textAlign: "right" }}>
                      {"loading..."}
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <p>Cosmic</p>
                  </Col>
                  <Col>
                    <p style={{ textAlign: "right" }}>
                      {"loading..."}
                    </p>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
          <Col xs={12} lg={6}>
            <div className="d-flex align-items-center flex-wrap flex-sm-nowrap mb-3 mt-3 h-75 justify-content-center">
              <div className="ms-3">
                <p style={{ textAlign: "center" }}>{COSMIC.ADDRESS}</p>
                <Row >
                  <Col className='d-flex align-items-center justify-content-center'>
                    <button className="btn" onClick={() => addToken()}>
                      {"Add to Metamask"}
                    </button>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Cosmic