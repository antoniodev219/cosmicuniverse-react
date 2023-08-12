import {Col, Row} from "react-bootstrap";
import MysticAlpinesPNG from "../../../../assets/img/lands/mysticAlpines.png";

const MysticAlpines = () => {
  return (
    <Row >
      <Col xs='12' xxl="8" style={{ display: "flex", textAlign: "center", alignItems: "center", justifyContent: "center", flexDirection: 'column' }}>
        <div className="right-section" style={{ marginTop: "auto", marginBottom: "auto" }}>
          <div className="body" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <h3>Scarcity: 24% (1825 Plots)</h3>
            <p>
              Land in Mystic Alpines has plentiful snow cover and has a
              significant degree of elevation compared with all other regions on
              Cosmic Island. Land plots here will possess some trees but plenty
              of stone, all kinds of ore, artifacts & relics, and crystals.
            </p>
          </div>
          <div className="footer" style={{ display: "flex", justifyContent: "space-around", paddingTop: '2rem', marginBottom: '2rem' }}>
            <a className="btn-test" href="https://marketplace.cosmicuniverse.io/market/land">
              <span className="btn">Buy Land Plots</span>
            </a>
            <a className="btn-test" href="https://info.cosmicuniverse.io/lore/localities#mystic-alpines">
              <span className="btn">Learn more</span>
            </a>
          </div>
        </div>
      </Col>
      <Col xs='12' xxl='4' className='mt-2 mt-xxl-0' style={{ alignItems: "center", justifyContent: "center", display: "flex" }}>
        <div className="left-section">
          <img src={MysticAlpinesPNG} className='img-character' alt='character-nft' style={{ maxWidth: '350px' }}/>
        </div>
      </Col>
    </Row>
  )
}

export default MysticAlpines