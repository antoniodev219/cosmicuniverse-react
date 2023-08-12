import {Col, Row} from "react-bootstrap";
import ForestOfWhimsyPNG from "../../../../assets/img/lands/forestOfWhimsy.png";

const ForestOfWhimsy = () => {
  return (
    <Row >
      <Col xs='12' xxl="8" style={{ display: "flex", textAlign: "center", alignItems: "center", justifyContent: "center", flexDirection: 'column' }}>
        <div className="right-section" style={{ marginTop: "auto", marginBottom: "auto" }}>
          <div className="body" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <h3>Scarcity: 8% (568 Plots)</h3>
            <p>
              The Forest of Whimsy is an exclusive area on Cosmic Island that
              will have everything the previous land plot regions mentioned
              have but in more plentiful quantities, as well as potions that can
              be harvested and used for magical abilities. There are crystal
              forests, meaning trees and plentiful massive glowing crystals
              growing out of the ground everywhere.
            </p>
          </div>
          <div className="footer" style={{ display: "flex", justifyContent: "space-around", paddingTop: '2rem', marginBottom: '2rem' }}>
            <a className="btn-test" href="https://marketplace.cosmicuniverse.io/market/land">
              <span className="btn">Buy Land Plots</span>
            </a>
            <a className="btn-test" href="https://info.cosmicuniverse.io/lore/localities#forest-of-whimsy">
              <span className="btn">Learn more</span>
            </a>
          </div>
        </div>
      </Col>
      <Col xs='12' xxl='4' className='mt-2 mt-xxl-0' style={{ alignItems: "center", justifyContent: "center", display: "flex" }}>
        <div className="left-section">
          <img src={ForestOfWhimsyPNG} className='img-character' alt='character-nft' style={{ maxWidth: '350px' }}/>
        </div>
      </Col>
    </Row>
  )
}

export default ForestOfWhimsy