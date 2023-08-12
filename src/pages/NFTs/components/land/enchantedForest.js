import {Col, Row} from "react-bootstrap";
import EnchantedForestPNG from "../../../../assets/img/lands/enchantedForest.png";

const EnchantedForest = () => {
  return (
    <Row >
      <Col xs='12' xxl="8" style={{ display: "flex", textAlign: "center", alignItems: "center", justifyContent: "center", flexDirection: 'column' }}>
        <div className="right-section" style={{ marginTop: "auto", marginBottom: "auto" }}>
          <div className="body" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <h3>Scarcity: 31% (2303 Plots)</h3>
            <p>
              Enchanted Forest land plots will have abundant resources to help
              players quickly and effectively develop their land plots and
              combine them into advanced settlements. There will be trees, a
              little bit of iron and gold ore, a small quantity of crystals, and
              magical artifacts.
            </p>
          </div>
          <div className="footer" style={{ display: "flex", justifyContent: "space-around", paddingTop: '2rem', marginBottom: '2rem' }}>
            <a className="btn-test" href="https://marketplace.cosmicuniverse.io/market/land">
              <span className="btn">Buy Land Plots</span>
            </a>
            <a className="btn-test" href="https://info.cosmicuniverse.io/lore/localities#enchanted-forest">
              <span className="btn">Learn more</span>
            </a>
          </div>
        </div>
      </Col>
      <Col xs='12' xxl='4' className='mt-2 mt-xxl-0' style={{ alignItems: "center", justifyContent: "center", display: "flex" }}>
        <div className="left-section">
          <img src={EnchantedForestPNG} className='img-character' alt='character-nft' style={{ maxWidth: '350px' }}/>
        </div>
      </Col>
    </Row>
  )
}

export default EnchantedForest