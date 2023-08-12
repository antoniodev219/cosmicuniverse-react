import {Col, Row} from "react-bootstrap";
import Silhouette from "../../../../assets/img/wizards/Generic_Frame.png";

const Trolls = () => {
    return (
      <Row >
          <Col xs='12' xxl="8" style={{ display: "flex", textAlign: "center", alignItems: "center", justifyContent: "center", flexDirection: 'column' }}>
              <div className="right-section" style={{ marginTop: "auto", marginBottom: "auto" }}>
                  <div className="body" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                      <h3>Crystal: Stone Shard</h3>
                      <p>
                          Trolls are strong and brutish, yet cunning and jovial as well. In fact, they always seem to
                          be in the mood for entertaining games ... unless they're hungry. Building bridges and
                          waging mock battles was not all that Troll-kind spent their long and ancient days doing.
                          They also had green thumbs, which they made use of in the wide expanse of land
                          surrounding them. Trolls come in many shapes and sizes, including Mountain, Cave,
                          Gnome, Forest, and Treasure Trolls.
                      </p>
                  </div>
                  <div className="footer" style={{ display: "flex", justifyContent: "space-around", paddingTop: '2rem', marginBottom: '2rem' }}>
                      <a className="btn-test" href="https://info.cosmicuniverse.io/lore/trolls">
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

export default Trolls