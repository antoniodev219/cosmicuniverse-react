import {Col, Row} from "react-bootstrap";
import RiversPNG from "../../../../assets/img/lands/rivers.png";

const Rivers = () => {
  return (
    <Row >
      <Col xs='12' xxl="8" style={{ display: "flex", textAlign: "center", alignItems: "center", justifyContent: "center", flexDirection: 'column' }}>
        <div className="right-section" style={{ marginTop: "auto", marginBottom: "auto" }}>
          <div className="body" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <h3>Scarcity: Abundant</h3>
            <p>
              A few rivers traverse Cosmic Island, and will occasionally have bridges
              going across them. Rivers can be used to traverse across land
              - quickly, and can also be used as a resource for "living water" that
              goes into potions, water fountains, and other in-game elements.
            </p>
          </div>
          <div className="footer" style={{ display: "flex", justifyContent: "space-around", paddingTop: '2rem', marginBottom: '2rem' }}>
            <a className="btn-test" href="https://info.cosmicuniverse.io/nfts/land/descriptions#rivers">
              <span className="btn">Learn more</span>
            </a>
          </div>
        </div>
      </Col>
      <Col xs='12' xxl='4' className='mt-2 mt-xxl-0' style={{ alignItems: "center", justifyContent: "center", display: "flex" }}>
        <div className="left-section">
          <img src={RiversPNG} className='img-character' alt='character-nft' style={{ maxWidth: '350px' }}/>
        </div>
      </Col>
    </Row>
  )
}

export default Rivers