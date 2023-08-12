import economy_1 from '../assets/img/overview/13.png'
import economy_2 from '../assets/img/overview/14.png'
import USDC from '../assets/img/overview/Diamond_USDC.png'
import TJ from '../assets/img/overview/Diamond_Trader_Joe.png'

export const Economy = () => {
    return (
        <>
            <div className="item d-flex align-items-center flex-wrap flex-sm-nowrap mb-3 mt-3">
                <div className="flex-shrink-0">
                    <img src={economy_1} alt="economy_1" />
                </div>
                <div className="flex-grow-1 ms-3">
                    <h3 className="mt-0">Cosmic</h3>
                    <p> COSMIC is used for various in-game burn mechanisms and in-game advantages like accelerated build times, beautification, and vanity customizations, and can be earned through various in-game sidequests, promotions, and tournaments.</p>
                </div>
            </div>
            <div className="item d-flex align-items-center flex-wrap flex-sm-nowrap mb-3 mt-3">
                <div className="flex-shrink-0">
                    <img src={economy_2} alt="economy_2" />
                </div>
                <div className="flex-grow-1 ms-3">
                    <h3 className="mt-0">Magic</h3>
                    <p> Used for trading all NFTs in Cosmic Universe on our native marketplace other than Resources, as well as for Character Staking and Land Staking rewards.</p>
                </div>
            </div>
            <div className="item d-flex align-items-center flex-wrap flex-sm-nowrap mb-3 mt-3">
                <div className="flex-shrink-0">
                    <img src={USDC} alt="economy_3" />
                </div>
                <div className="flex-grow-1 ms-3">
                    <h3 className="mt-0">USDC</h3>
                    <p> Used for determining the stable price of in-game Resources for trade on the marketplace.</p>
                </div>
            </div>
            <div className="item d-flex align-items-center flex-wrap flex-sm-nowrap mb-3 mt-3">
                <div className="flex-shrink-0">
                    <img src={TJ} alt="economy_4" />
                </div>
                <div className="flex-grow-1 ms-3">
                    <h3 className="mt-0">Yield Farms</h3>
                    <p> Enter the Cosmic Universe yield farms to earn MAGIC on the Trader Joe DEX</p>
                </div>
            </div>
        </>
    )
}