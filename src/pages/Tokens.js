import React, { useEffect, useState } from "react";

import { Col, Container, Row, Tab, Tabs } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import { ethers } from "ethers";

import overview from "../assets/img/overview-bg.png";
import { StrBigNumber } from "../components/Web3";
import { Economy } from "../components/Economy";
import Cosmic from "../components/Cosmic";
import COSMIC from "../contracts/cosmic";
import Magic from "../components/Magic";
import MAGIC from "../contracts/magic";


const Tokens = () => {
    const [tab, setTab] = useState('summary')





    return (
        <>
            <ToastContainer />
            <section id="game-overview" className='pb-0'>
                <Container>
                    <div className="section-title">
                        <h2 className="mb-0">Tokens</h2>
                    </div>
                    <Row>
                        <Col>
                            <div className='box'>
                                <img src={overview}  alt='' className="overview-bg"/>
                                <div className="contents">

                                    <Tabs
                                        id="controlled-tab-example"
                                        activeKey={tab}
                                        onSelect={(k) => setTab(k)}
                                        className="mb-3"
                                    >
                                        <Tab eventKey="summary" title="Summary">
                                            <Economy />
                                        </Tab>
                                        <Tab eventKey="magic" title="Magic">
                                            <Magic />
                                        </Tab>
                                        <Tab eventKey="cosmic" title="Cosmic">
                                            <Cosmic />
                                        </Tab>
                                    </Tabs>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}

export default Tokens;