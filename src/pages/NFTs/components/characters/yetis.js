import {Col, Row} from "react-bootstrap";
import Silhouette from "../../../../assets/img/wizards/Generic_Frame.png";

const Yetis = () => {
  return (
    <Row >
      <Col xs='12' xxl="8" style={{ display: "flex", textAlign: "center", alignItems: "center", justifyContent: "center", flexDirection: 'column' }}>
        <div className="right-section" style={{ marginTop: "auto", marginBottom: "auto" }}>
          <div className="body" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <h3>Crystal: Water Shard</h3>
            <p>
              A primal yet magical form of life on Crypton, Yetis are mysterious and brutish yet have
              hearts of gold. They have been known by names like Sasquatch, Yeti, and others. There
              are known to be towering and muscular Yetis in mountains, forests, and caves,
              possessing massive bodies and maintaining enormous strength. They have a
              remarkable ability to blend into the environment, and teleport with ease across the
              many islands of Crypton, and can be unseen when a situation calls for it
            </p>
          </div>
          <div className="footer" style={{ display: "flex", justifyContent: "space-around", paddingTop: '2rem', marginBottom: '2rem' }}>
            <a className="btn-test" href="https://info.cosmicuniverse.io/lore/yetis">
              <span className="btn">Learn more</span>
            </a>
          </div>
        </div>
      </Col>
      <Col xs='12' xxl='4' className='mt-2 mt-xxl-0' style={{ alignItems: "center", justifyContent: "center", display: "flex" }}>
        <div className="left-section">
          <img src={Silhouette} className='img-character' alt='character-nft' style={{ maxWidth: '350px' }}/>
        </div>
      </Col>
    </Row>
  )
}

export default Yetis