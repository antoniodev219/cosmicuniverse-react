import React, { useState } from 'react';
import {Col, Row} from "react-bootstrap";
import ElfFramed from "../../../../../assets/img/wizards/Elf_Framed.png";


const Elves = () => {
  const [open, setOpen] = useState(false)
  return (
    <Row >
      <Col xs='12' xxl="8" style={{ display: "flex", textAlign: "center", alignItems: "center", justifyContent: "center", flexDirection: 'column' }}>
        <div className="right-section" style={{ marginTop: "auto", marginBottom: "auto" }}>
          <div className="body" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <h3>Crystal: Air Shard</h3>
            <p>
              Elves are wise and elegant. They are ancient and noble, maintaining a close connection
              with Wizards, as well as all life. They have expert control over magic streaming from the
              Tree of Magic. They have the ability to both create and revive all forms of life, quickly
              regenerate their own energy, and wield magical artifacts in the optimal manner. They
              are a sophisticated race that is second to Wizards when it comes to casting spells and
              using potions.
            </p>
          </div>
          <div className="footer" style={{ display: "flex", justifyContent: "space-around", paddingTop: '2rem', marginBottom: '2rem' }}>
            <a className="btn-test" href="https://marketplace.cosmicuniverse.io/mint">
              <span className="btn">Mint Elf NFTs</span>
            </a>
            <a className="btn-test" href="https://info.cosmicuniverse.io/lore/elves">
              <span className="btn">Learn more</span>
            </a>
          </div>
        </div>
      </Col>
      <Col xs='12' xxl='4' className='mt-2 mt-xxl-0' style={{ alignItems: "center", justifyContent: "center", display: "flex" }}>
        <div className="left-section">
          <img src={ElfFramed} className='img-character' alt='character-nft' style={{ maxWidth: '350px' }}/>
        </div>
      </Col>
    </Row>
  )
}

export default Elves