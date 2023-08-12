import {Col, Container, Row} from "react-bootstrap";
import economy_3 from "../assets/img/overview/14.png";
import React, { useState, useEffect } from "react";
import MAGIC from '../contracts/magic';

const Magic = (props) => {
    const [burned, setBurned] = useState('')
    const [totalSupply, setTotalSupply] = useState('')
    const [mintable, setMintable] = useState('')

    const addToken = async () => {
        await window.ethereum.request({
            method: 'wallet_watchAsset',
            params: {
                type: 'ERC20',
                options: {
                    address: MAGIC.ADDRESS,
                    name: `Magic`,
                    symbol: `MAGIC`,
                    decimals: 18,
                    image: "https://marketplace.cosmicuniverse.io/images/magic.png"
                }
            }
        })
    }

    useEffect(() => {
        const contract = MAGIC.Contract()
        const getMagicTokenTotals = async () => {
        }

        getMagicTokenTotals()
        const magicTokenInterval = setInterval(() => {
            getMagicTokenTotals()
        }, 60000);

        return () => {
            clearInterval(magicTokenInterval);
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
                                    <li><p className="mb-0">Governance</p></li>
                                    <li><p className="mb-0">Single Staking</p></li>
                                    <li><p className="mb-0">Yield Farming</p></li>
                                    <li>
                                        <p className="mb-0">
                                            Land Staking (as a cost for planting seeds & reward distributed from
                                            the reward pool)
                                        </p>
                                    </li>
                                    <li><p className="mb-0">Minting land NFTs</p></li>
                                    <li>
                                        <p className="mb-0">
                                            Buying and selling all NFTs on the Cosmic Universe marketplace
                                            besides resources
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} xl={6}>
                        <div className="d-flex align-items-center flex-wrap flex-sm-nowrap mb-3 justify-content-center">
                            <div className="ms-3 w-75">
                                <h3 className="mt-0" style={{ textAlign: "center" }}>Details</h3>
                                <p>
                                    MAGIC will be used to mint land NFTs, as well as buy and sell Cosmic Universe NFTs
                                    on our native marketplace.
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <h3 className="mt-0" style={{ textAlign: "center" }}>Magic</h3>
                    <Col xs={12} lg={5}>
                        <div className="d-flex align-items-center flex-wrap flex-sm-nowrap mb-3 justify-content-center justify-content-lg-end">
                            <div className="ms-3">
                                <Row>
                                    <Col>
                                        <p style={{ marginBottom: 0 }}>Token Cap</p>
                                    </Col>
                                    <Col>
                                        <p style={{ textAlign: "right", marginBottom: 0 }}>100,000,000.000</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <p style={{ whiteSpace: "nowrap", marginBottom: 0 }}>Current Supply</p>
                                    </Col>
                                    <Col>
                                        <p style={{ textAlign: "right", marginBottom: 0 }}>
                                            {totalSupply || "loading..."}
                                        </p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <p style={{ marginBottom: 0 }}>Initial Supply</p>
                                    </Col>
                                    <Col>
                                        <p style={{ textAlign: "right", marginBottom: 0 }}>2,000,000.000</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <p style={{ marginBottom: 0 }}>Burned</p>
                                    </Col>
                                    <Col>
                                        <p style={{ textAlign: "right", marginBottom: 0 }}>
                                            {burned || "loading..."}
                                        </p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <p style={{ marginBottom: 0 }}>Initial Price</p>
                                    </Col>
                                    <Col>
                                        <p style={{ textAlign: "right", marginBottom: 0 }}>$0.01</p>
                                    </Col>
                                </Row>

                            </div>
                        </div>
                    </Col>
                    <Col xs={12} lg={2}>
                        <div className="d-flex align-items-center flex-wrap flex-sm-nowrap mb-3 justify-content-center">
                            <div className="flex-shrink-0">
                                <img src={economy_3} alt="economy_3" />
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} lg={5}>
                        <div className="d-flex align-items-center flex-wrap flex-sm-nowrap mb-3 justify-content-center justify-content-lg-start">
                            <div className="ms-3">
                                <Row>
                                    <Col>
                                        <p style={{ marginBottom: 0 }}>Mintable</p>
                                    </Col>
                                    <Col>
                                        <p style={{ textAlign: "right", marginBottom: 0 }}>
                                            {mintable || "loading..."}
                                        </p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <p style={{ marginBottom: 0 }}>Start Block</p>
                                    </Col>
                                    <Col>
                                        <p style={{ textAlign: "right", marginBottom: 0 }}>16,316,500</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <p style={{ whiteSpace: "nowrap", marginBottom: 0 }}>Unlock Block</p>
                                    </Col>
                                    <Col>
                                        <p style={{ textAlign: "right", marginBottom: 0 }}>21,612,813</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <p style={{ marginBottom: 0 }}>Lockup</p>
                                    </Col>
                                    <Col>
                                        <p style={{ textAlign: "right", marginBottom: 0 }}>95%</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col style={{ marginBottom: 0 }}>
                                        <p style={{ whiteSpace: "nowrap", marginBottom: 0}}>Deposit Fee</p>
                                    </Col>
                                    <Col>
                                        <p style={{ textAlign: "right", marginBottom: 0 }}>1%</p>
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
                                <h3 className="mt-0" style={{ textAlign: "center" }}>Balance</h3>
                                <Row>
                                    <Col>
                                        <p>Magic</p>
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
                                <p style={{ textAlign: "center" }}>{MAGIC.ADDRESS}</p>
                                <Row >
                                    <Col className='d-flex align-items-center justify-content-center'>
                                        <button className="btn" onClick={addToken}>
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

export default Magic