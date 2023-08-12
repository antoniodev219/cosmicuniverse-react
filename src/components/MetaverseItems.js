import metaverse_1 from '../assets/img/overview/5.png'
import metaverse_2 from '../assets/img/overview/6.png'
import metaverse_3 from '../assets/img/overview/7.png'
import metaverse_4 from '../assets/img/overview/8.png'

export const MetaverseItems = () => {
    return (
        <>
            <div className="item d-flex align-items-center flex-wrap flex-sm-nowrap mb-3 mt-3">
                <div className="flex-shrink-0">
                    <img src={metaverse_1} alt="metaverse_1" />
                </div>
                <div className="flex-grow-1 ms-3">
                    <h3 className="mt-0">Regions</h3>
                    <p> Cosmic island contains 5 distinct regions: Elysians Fields, Mystic Alpines, Enchanted Forest, Forest of Whimsy and Cosmic Enchanters.</p>
                </div>
            </div>
            <div className="item d-flex align-items-center flex-wrap flex-sm-nowrap mb-3 mt-3">
                <div className="flex-shrink-0">
                    <img src={metaverse_2} alt="metaverse_2" />
                </div>
                <div className="flex-grow-1 ms-3">
                    <h3 className="mt-0">Own parts of cosmic universe</h3>
                    <p>Own various elements of the game as tokenized assets on the Harmony blockchain, including characters, land, resources and items.</p>
                </div>
            </div>
            <div className="item d-flex align-items-center flex-wrap flex-sm-nowrap mb-3 mt-3">
                <div className="flex-shrink-0">
                    <img src={metaverse_3} alt="metaverse_3" />
                </div>
                <div className="flex-grow-1 ms-3">
                    <h3 className="mt-0">Open-world exploring</h3>
                    <p>Explore Cosmic Island's towering mountains, lush forests, sprawling fields, rolling hills, expansive shores, and more on this 5x5 km island.</p>
                </div>
            </div>
            <div className="item d-flex align-items-center flex-wrap flex-sm-nowrap mb-3 mt-3">
                <div className="flex-shrink-0">
                    <img src={metaverse_4} alt="metaverse_4" />
                </div>
                <div className="flex-grow-1 ms-3">
                    <h3 className="mt-0">Explore, Gather, Build, Trade, Ascend</h3>
                    <p>  Define your own destiny and do what you want to do, at your own pace. Let Cosmic Universe become your metaverse fantasia.</p>
                </div>
            </div>
        </>
    )
}
