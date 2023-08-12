import {Col, Container, Row} from "react-bootstrap";
import Wizard420Framed from "../../../assets/img/wizards/Wizard_Framed.png";

export const CharacterNFT = () => {
  return (
    <>
      <section id="character-nft" className="pt-0">
        <Container>
          <div className="section-title">
            <h2>OWN CHARACTERS</h2>
          </div>
          <Row>
            <Col lg="4">
              <div className="left-section">
                <img src={Wizard420Framed} className='img-character' alt='character-nft'/>
              </div>
            </Col>
            <Col lg="8">
              <div className="right-section">
                <div className="body">
                  There are 7 races that exists on Planet Crypton, each with their own collection of 10,000 tokenized
                  unique characters. As ERC-721 tokens, owners of these NFTs will have one of the two NFTs necessary
                  to play Cosmic Universe, the other being a land plot NFT. While technically just a character NFT is
                  enough to play, to get the most out of the game and earn the most in-game rewards, both a land and
                  character NFT are required.
                  <br/> <br/>
                  Every character NFT will also possess the ability to summon a pet that will assist players on quests.
                  as well as provide a friendly companion.
                </div>
                <div className="footer">
                  <a className="btn-test" href="https://marketplace.cosmicuniverse.io/character"> <span className="btn"> Buy Characters</span> </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}