import {Col, Row} from "react-bootstrap";
import RoadsPNG from "../../../../assets/img/lands/roads.png";

const Roads = () => {
  return (
    <Row >
      <Col xs='12' xxl="8" style={{ display: "flex", textAlign: "center", alignItems: "center", justifyContent: "center", flexDirection: 'column' }}>
        <div className="right-section" style={{ marginTop: "auto", marginBottom: "auto" }}>
          <div className="body" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <h3>Scarcity: Abundant</h3>
            <p>
              Roads can be used when traveling throughout Cosmic Island.
              Owning land next to a road can be more useful and valuable than
              land further away from roads. Other players will be more likely to
              harvest resources on land closest to roads, resulting in more revenue
              for the land owners. Roads will speed up travel by 300%.
              When a road goes over a river, it is represented as a bridge.
            </p>
          </div>
          <div className="footer" style={{ display: "flex", justifyContent: "space-around", paddingTop: '2rem', marginBottom: '2rem' }}>
            <a className="btn-test" href="https://info.cosmicuniverse.io/nfts/land/descriptions#roads">
              <span className="btn">Learn more</span>
            </a>
          </div>
        </div>
      </Col>
      <Col xs='12' xxl='4' className='mt-2 mt-xxl-0' style={{ alignItems: "center", justifyContent: "center", display: "flex" }}>
        <div className="left-section">
          <img src={RoadsPNG} className='img-character' width='1400' height='756' alt='character-nft' style={{ width: '350px', height: '350px', objectFit: 'cover' }}/>
        </div>
      </Col>
    </Row>
  )
}

export default Roads