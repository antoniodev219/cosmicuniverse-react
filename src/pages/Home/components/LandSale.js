import {Col, Container, Row} from "react-bootstrap";
import image from '../../../assets/img/own-land.png'
export const LandSale = () => {
    return (
        <>
            <section id="land-sale">
                <Container>
                    <div className="section-title">
                        <h2>Own land</h2>
                    </div>
                    <Row className="">
                        <Col lg="6">
                            <div className="left-section">
                                <div className="title">Own a piece of Cosmic Universe!</div>
                                <div className="body">
                                    <p>Cosmic Island houses 7,060 purchasable tokenized land plots that can be the home of your playable character, be they a Wizard, Elf, or another one of the many races coming to Cosmic Universe over the coming months and years. </p>
                                    <p>As a landowner, you will earn land staking rewards in the form of $MAGIC once Cosmic Universe is released. You will also earn rewards from resources harvested on your land by others, along with excess resources you harvest on your land and resell on our native marketplace.</p>
                                    <p>Additional land plots will be available with the release of six additional islands on the homeworld planet of Crypton, with more planets being added to the metaverse as time goes on to meet increased player demand.</p>
                                </div>
                                <div className="footer">
                                    <a href="https://marketplace.cosmicuniverse.io/land" className="btn-test mr-3" ><span className="btn"> Buy Land</span></a>
                                    <a href="https://marketplace.cosmicuniverse.io/land" className="btn-test mr-3" ><span className="btn"> Map</span></a>
                                </div>
                            </div>
                        </Col>
                        <Col lg="6" >
                            <div className="right-section">
                               <img src={image} className='img-fluid' alt='owl-land'/>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}