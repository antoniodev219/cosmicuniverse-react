import {Col, Row} from "react-bootstrap";
import Silhouette from "../../../../assets/img/wizards/Generic_Frame.png";

const Apes = () => {
    return (
      <Row >
          <Col xs='12' xxl="8" style={{ display: "flex", textAlign: "center", alignItems: "center", justifyContent: "center", flexDirection: 'column' }}>
              <div className="right-section" style={{ marginTop: "auto", marginBottom: "auto" }}>
                  <div className="body" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                      <h3>Crystal: Earth Shard</h3>
                      <p>
                          Apes have plenty of brawn but little in the way of brains. Still, they are remarkably
                          confident, strong, and connected to their environment. An ape is known to dive
                          head-first in a situation, and sometimes quite literally, irregardless of the potential
                          consequences. They find the thrill of trying something new to be incredibly exciting.
                          Apes have come to be beloved by all on Crypton for their courage, humor, and
                          all-around entertaining antics.
                      </p>
                  </div>
                  <div className="footer" style={{ display: "flex", justifyContent: "space-around", paddingTop: '2rem', marginBottom: '2rem' }}>
                      <a className="btn-test" href="https://info.cosmicuniverse.io/lore/apes">
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

export default Apes