import {Col, Container, Row, Tab, Tabs} from "react-bootstrap";
import {useState} from "react";
import {GamePlayItems} from "../../../components/GamePlayItems";
import {MetaverseItems} from "../../../components/MetaverseItems";
import {NFTItems} from "../../../components/NFTItems";
import {Economy} from "../../../components/Economy";
import overview from "../../../assets/img/overview-bg.png"

export const Overview = () => {
    const [key, setKey] = useState('gameplay');
    return (
        <>
            <div className="bg-pattern mt-3"/>
            <section id="game-overview" className='pb-0'>
                <Container>
                    <div className="section-title">
                        <h2>Welcome To cosmic Universe</h2>
                    </div>
                    <Row>
                        <Col>
                            <div className='box'>
                                <img src={overview}  alt='' className="overview-bg"/>
                                <div className="contents">
                                    <Tabs
                                        id="controlled-tab-example"
                                        activeKey={key}
                                        onSelect={(k) => setKey(k)}
                                        className="mb-3"
                                    >
                                        <Tab eventKey="gameplay" title="Gameplay">
                                            <GamePlayItems/>
                                        </Tab>
                                        <Tab eventKey="metaverse" title="Metaverse">
                                            <MetaverseItems/>
                                        </Tab>
                                        <Tab eventKey="nfts" title="NFTs">
                                            <NFTItems/>
                                        </Tab>
                                        <Tab eventKey="cosmic_magic" title="ECONOMY">
                                            <Economy/>
                                        </Tab>
                                    </Tabs>
                                </div>
                            </div>
                            <div className='character'/>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}