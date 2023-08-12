import gameplay_1 from '../assets/img/overview/1.png'
import gameplay_2 from '../assets/img/overview/2.png'
import gameplay_3 from '../assets/img/overview/3.png'
import gameplay_4 from '../assets/img/overview/4.png'

export const GamePlayItems = () => {
    return (
        <>
            <div className="item d-flex align-items-center flex-wrap flex-sm-nowrap mb-3 mt-3">
                <div className="flex-shrink-0">
                    <img src={gameplay_1} alt="gameplay_1" />
                </div>
                <div className="flex-grow-1 ms-3">
                    <h3 className="mt-0">Open world Adventure mmorpg</h3>
                    <p>In Cosmic Universe, you can define your own adventure however you desire.
                        Explore, Harvest, Mine, Build Settlements, Engage in PVP, Competitions and Events!</p>
                </div>
            </div>
            <div className="item d-flex align-items-center flex-wrap flex-sm-nowrap mb-3">
                <div className="flex-shrink-0">
                    <img src={gameplay_2} alt="gameplay_2" />
                </div>
                <div className="flex-grow-1 ms-3 ">
                    <h3 className="mt-0">Fantasy Metaverse</h3>
                    <p>Cosmic Universe can be your idyllic home in a fantasy metaverse where you have fun with friends,
                    customize interiors of your settlements, and more.</p>
                </div>
            </div>
            <div className="item d-flex align-items-center flex-wrap flex-sm-nowrap mb-3">
                <div className="flex-shrink-0">
                    <img src={gameplay_3} alt="gameplay_3" />
                </div>
                <div className="flex-grow-1 ms-3">
                    <h3 className="mt-0">Entertaining lore</h3>
                    <p>Lore masters have crafted entertaining storylines that captivate you as you go on quests within the game.</p>
                </div>
            </div>
            <div className="item d-flex align-items-center flex-wrap flex-sm-nowrap mb-3">
                <div className="flex-shrink-0">
                    <img src={gameplay_4} alt="gameplay_4" />
                </div>
                <div className="flex-grow-1 ms-3">
                    <h3 className="mt-0">Become etherea lumina</h3>
                    <p>Gain XP and level up by harvesting resources, going on quests, and building increasingly- advanced structures and settlements.</p>
                </div>
            </div>
        </>
    )
}
