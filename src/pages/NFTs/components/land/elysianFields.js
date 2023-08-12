import {Col, Row} from "react-bootstrap";
import ElysianFieldsPNG from "../../../../assets/img/lands/elysianFields.png";

const ElysianFields = () => {
  return (
    <Row >
      <Col xs='12' xxl="8" style={{ display: "flex", textAlign: "center", alignItems: "center", justifyContent: "center", flexDirection: 'column' }}>
        <div className="right-section" style={{ marginTop: "auto", marginBottom: "auto" }}>
          <div className="body" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <h3>Scarcity: 32% (2364 Plots)</h3>
            <p>
              The majority of the land plots on Cosmic Island will be Elysian
              Fields. This type of land is mostly meadows with occasional trees
              and shrubs. It will have some resources like stone, iron ore, and
              - sparse trees for lumber but not much beyond that. These have a
              satisfactory amount of resources that will be what most players
              will likely get to start out.
            </p>
          </div>
          <div className="footer" style={{ display: "flex", justifyContent: "space-around", paddingTop: '2rem', marginBottom: '2rem' }}>
            <a className="btn-test" href="https://marketplace.cosmicuniverse.io/market/land">
              <span className="btn">Buy Land Plots</span>
            </a>
            <a className="btn-test" href="https://info.cosmicuniverse.io/lore/localities#elysian-fields">
              <span className="btn">Learn more</span>
            </a>
          </div>
        </div>
      </Col>
      <Col xs='12' xxl='4' className='mt-2 mt-xxl-0' style={{ alignItems: "center", justifyContent: "center", display: "flex" }}>
        <div className="left-section">
          <img src={ElysianFieldsPNG} className='img-character' alt='character-nft' style={{ maxWidth: '350px' }}/>
        </div>
      </Col>
    </Row>
  )
}

export default ElysianFields