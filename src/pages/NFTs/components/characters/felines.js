import {Col, Row} from "react-bootstrap";
import Silhouette from "../../../../assets/img/wizards/Generic_Frame.png";

const Felines = () => {
    return (
      <Row >
          <Col xs='12' xxl="8" style={{ display: "flex", textAlign: "center", alignItems: "center", justifyContent: "center", flexDirection: 'column' }}>
              <div className="right-section" style={{ marginTop: "auto", marginBottom: "auto" }}>
                  <div className="body" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                      <h3>Crystal: Crystal Shard</h3>
                      <p>
                          The Felines are agile, gentle, and full of grace, appearing as a combination of humans,
                          elves, and feline mammals. They possess a crystalline quality that allows them to
                          harness the power of all crystals within the realm. They retain advanced knowledge of
                          how to use magic for evolving the life they see all around them. There is an inherent
                          playfulness in felines, who are known to take pleasure in music, dancing, spas, and racing.
                      </p>
                  </div>
                  <div className="footer" style={{ display: "flex", justifyContent: "space-around", paddingTop: '2rem', marginBottom: '2rem' }}>
                      <a className="btn-test" href="https://info.cosmicuniverse.io/lore/felines">
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

export default Felines