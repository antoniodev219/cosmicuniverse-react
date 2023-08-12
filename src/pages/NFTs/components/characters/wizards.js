import { Col, ProgressBar, Row, Spinner } from "react-bootstrap";
import Wizard420Framed from "../../../../assets/img/wizards/Wizard_Framed.png";
import React, { useEffect, useState } from "react";


const Wizards = () => {

  return (
    <Row >
      <Col xs='12' xxl="8" style={{ display: "flex", textAlign: "center", alignItems: "center", justifyContent: "center", flexDirection: 'column' }}>
        <div className="right-section" style={{ marginTop: "auto", marginBottom: "auto" }}>
          <div className="body" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <h3>Crystal: Aether Shard</h3>
            <p>
              Wizards were the first root race to be created, out of the Aether shard. This imbued
              them with the most magic out of all of the races on Crypton, and also gave them the
              important responsibility of protecting the Tree of Magic, and ensuring magic was used
              for good. There are male and female wizards (3 males for every female), all wise, noble,
              and virtuous. What they lack in physical strength they make up for in the expert use of
              spells, artifacts, and potions.
            </p>
          </div>
          <Row className="justify-content-around">
            <Col xs='12' md='6' lg='4' className="mb-1">
              <a className="btn-test" href="https://marketplace.cosmicuniverse.io/market/character">
                <span className="btn">Buy Wizards</span>
              </a>
            </Col>
            <Col xs='12' md='6' lg='4'>
              <a className="btn-test" href="https://info.cosmicuniverse.io/lore/wizards">
                <span className="btn">Learn more</span>
              </a>
            </Col>
          </Row>
        </div>
      </Col>
      <Col xs='12' xxl='4' className='mt-2 mt-xxl-0' style={{ alignItems: "center", justifyContent: "center", display: "flex" }}>
        <div className="left-section">
          <img src={Wizard420Framed} className='img-character' alt='character-nft' style={{ maxWidth: '350px' }}/>
        </div>
      </Col>
    </Row>
  )
}

export default Wizards