import {Col, Row} from "react-bootstrap";
import Silhouette from "../../../../assets/img/wizards/Generic_Frame.png";

const Dwarves = () => {
    return (
      <Row >
          <Col xs='12' xxl="8" style={{ display: "flex", textAlign: "center", alignItems: "center", justifyContent: "center", flexDirection: 'column' }}>
              <div className="right-section" style={{ marginTop: "auto", marginBottom: "auto" }}>
                  <div className="body" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                      <h3>Crystal: Fire Shard</h3>
                      <p>
                          Known for their love of mining, metalworking, crafting, and insatiable desire for
                          elemental wealth, Dwarves are considered to be the hardest-working of all races on
                          Crypton. They are also incredibly stocky, haggard, and rough around the edges, which
                          contrasts with their smaller stature. This is a race that is well-known to be hardworking,
                          dependable, and seemingly impervious to even the most extreme environmental
                          conditions. They are as nice as they are stubborn. A Dwarf's trust must be earned.
                      </p>
                  </div>
                  <div className="footer" style={{ display: "flex", justifyContent: "space-around", paddingTop: '2rem', marginBottom: '2rem' }}>
                      <a className="btn-test" href="https://info.cosmicuniverse.io/lore/dwarves">
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

export default Dwarves