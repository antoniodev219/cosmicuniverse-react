import {Col, Row} from "react-bootstrap";
import React from "react";

const Summary = () => {
  return (
    <Row>
      <p>
        Each character will be based on an NFT version of the character, in one of the 7 root races. This character
        will have the name of its race followed by a number (example: Wizard #777). Every character NFT will also
        possess the ability to summon a pet/familiar. For example, the Cosmic Wizards NFT collection, the first
        released, will have the ability to summon a pet dragon. Each pet will provide an in-game advantage, such as
        accelerating movement from A to B on a given land map.
        Characters can be leveled-up by participating in the Main Quest of exploring, harvesting, building
        increasingly-advanced structures, and beautifying their land, as well as participating in numerous
        PVP and PVE side quests.
      </p>
      <Col xs={12} xl={3}>
        <div className="d-flex align-items-center flex-wrap flex-sm-nowrap mb-3 justify-content-center">
          <div className="ms-3">
            <h3 className="mt-0" style={{ textAlign: "center" }}>Attunement</h3>
            <ul>
              <li><p className="mb-0">Apes – Earth Shard</p></li>
              <li><p className="mb-0">Elves – Air Shard</p></li>
              <li><p className="mb-0">Ravers – Fire Shard</p></li>
              <li><p className="mb-0">Felines – Crystal Shard</p></li>
              <li><p className="mb-0">Wizards – Aether Shard</p></li>
              <li><p className="mb-0">Yetis – Stone Shard</p></li>
              <li><p className="mb-0">Gnomes – Water Shard</p></li>
            </ul>
          </div>
        </div>
      </Col>
      <Col xs={12} xl={9}>
        <div className="d-flex align-items-center flex-wrap flex-sm-nowrap mb-3 justify-content-center">
          <div className="ms-3 w-75">
            <h3 className="mt-0" style={{ textAlign: "center" }}>Details</h3>
            <p>
              Each race of characters has a magical ability that gives it an advantage over another race of characters.
              This magical ability is directly tied to the magical crystal shard its respective Elemental used to
              create their race. However, no race of characters is better or worse than any other. All have their
              own unique advantages and disadvantages.
            </p>

          </div>
        </div>
      </Col>
    </Row>
  )
}

export default Summary