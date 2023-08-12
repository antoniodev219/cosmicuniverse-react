import React, { useEffect, useState } from "react";
import { Col, Container, Row, Tab, Tabs } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import { useParams } from 'react-router-dom';
import overview from "../../assets/img/overview-bg.png";
import ElysianFields from "./components/land/elysianFields";
import EnchantedForest from "./components/land/enchantedForest";
import MysticAlpines from "./components/land/mysticAlpines";
import ForestOfWhimsy from "./components/land/forestOfWhimsy";
import Rivers from "./components/land/rivers";
import Roads from "./components/land/roads";
import Yetis from './components/characters/yetis'
import Wizards from './components/characters/wizards'
import Elves from './components/characters/elves'
import Felines from './components/characters/felines'
import Dwarves from './components/characters/dwarves'
import Trolls from './components/characters/trolls'
import Apes from './components/characters/apes'
import Summary from "./components/summary";

const NFTs = () => {
  const [tab, setTab] = useState('Summary')
  const [characterTab, setCharacterTab] = useState('Wizards')
  const [landTab, setLandTab] = useState('Elysian Fields')
  const { category, name } = useParams();
  console.log(category, name)
  useEffect(() => {
    if (category) {
      const cTabs = ['characters', 'land']
      if (cTabs.includes(category)) {
        setTab(category.charAt(0).toUpperCase() + category.slice(1))
      }
    }
    if (name) {
      const cTabs = ["wizards", "elves", "apes", "felines", "trolls", "yetis", "dwarves"]
      if (cTabs.includes(name)) {
        setCharacterTab(name.charAt(0).toUpperCase() + name.slice(1))
      }
    }
  }, [category, name])
  return (
    <>
      <ToastContainer />
      <section id="game-overview" className='pb-0'>
        <Container>
          <div className="section-title">
            <h2 className="mb-0">NFTs</h2>
          </div>
          <Row>
            <Col>
              <div className='box'>
                <img src={overview}  alt='' className="overview-bg"/>
                <div className="contents">
                  <Tabs
                    id="nfts-tab"
                    activeKey={tab}
                    onSelect={(k) => setTab(k)}
                    className="mb-3"
                  >
                    <Tab eventKey="Summary" title="Summary">
                      <Summary />
                    </Tab>
                    <Tab eventKey="Characters" title="Characters">
                      <Tabs
                        id="characters-tab"
                        activeKey={characterTab}
                        onSelect={(k) => setCharacterTab(k)}
                        className="mb-3"
                      >
                        <Tab eventKey="Wizards" title="Wizards"><Wizards/></Tab>
                        <Tab eventKey="Elves" title="Elves"><Elves /></Tab>
                        <Tab eventKey="Apes" title="Apes"><Apes /></Tab>
                        <Tab eventKey="Felines" title="Felines"><Felines /></Tab>
                        <Tab eventKey="Trolls" title="Trolls"><Trolls /></Tab>
                        <Tab eventKey="Yetis" title="Yetis"><Yetis /></Tab>
                        <Tab eventKey="Dwarves" title="Dwarves"><Dwarves /></Tab>
                      </Tabs>
                    </Tab>
                    <Tab eventKey="Land" title="Land">
                      <Tabs
                        id="land-tab"
                        activeKey={landTab}
                        onSelect={(k) => setLandTab(k)}
                        className="mb-3"
                      >
                        <Tab eventKey="Elysian Fields" title="Elysian Fields"><ElysianFields /></Tab>
                        <Tab eventKey="Enchanted Forest" title="Enchanted Forest"><EnchantedForest /></Tab>
                        <Tab eventKey="Mystic Alpines" title="Mystic Alpines"><MysticAlpines /></Tab>
                        <Tab eventKey="Forest Of Whimsy" title="Forest Of Whimsy"><ForestOfWhimsy /></Tab>
                        <Tab eventKey="Rivers" title="Rivers"><Rivers /></Tab>
                        <Tab eventKey="Roads" title="Roads"><Roads /></Tab>
                      </Tabs>
                    </Tab>
                  </Tabs>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default NFTs;