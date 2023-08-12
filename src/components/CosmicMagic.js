import LazyLoad from 'react-lazyload'
import cosmic_magic_1 from '../assets/img/overview/13.png'
import cosmic_magic_2 from '../assets/img/overview/14.png'
import cosmic_magic_3 from '../assets/img/overview/15.png'
import cosmic_magic_4 from '../assets/img/overview/16.png'

export const CosmicMagic = () => {
    return (
        <>
            <div className="item d-flex align-items-center flex-wrap flex-sm-nowrap mb-3 mt-3">
                <div className="flex-shrink-0">
                    <LazyLoad once><img src={cosmic_magic_1} alt="cosmic_magic_1" /></LazyLoad>
                </div>
                <div className="flex-grow-1 ms-3">
                    <h3 className="mt-0">Cosmic</h3>
                    <p> COSMIC is used for players paying for in-game advantages like accelerated build times, creating new NFTs using two existing NFTs, and can be earned through various in-game sidequests, promotions, or tournaments.</p>
                </div>
            </div>
            <div className="item d-flex align-items-center flex-wrap flex-sm-nowrap mb-3 mt-3">
                <div className="flex-shrink-0">
                    <LazyLoad once><img src={cosmic_magic_2} alt="cosmic_magic_2" /></LazyLoad>
                </div>
                <div className="flex-grow-1 ms-3">
                    <h3 className="mt-0">Magic</h3>
                    <p> MAGIC is used for buying & selling all tokenized in-game assets in Cosmic Universe except for Resources.</p>
                </div>
            </div>
            <div className="item d-flex align-items-center flex-wrap flex-sm-nowrap mb-3 mt-3">
                <div className="flex-shrink-0">
                    <LazyLoad once><img src={cosmic_magic_3} alt="cosmic_magic_3" /></LazyLoad>
                </div>
                <div className="flex-grow-1 ms-3">
                    <h3 className="mt-0">DAI</h3>
                    <p> DAI is used for the stable price of in-game resources and for paying out in-game rewards (daily check-in rewards, land staking rewards, etc)</p>
                </div>
            </div>
            <div className="item d-flex align-items-center flex-wrap flex-sm-nowrap mb-3 mt-3">
                <div className="flex-shrink-0">
                    <LazyLoad once><img src={cosmic_magic_4} alt="cosmic_magic_4" /></LazyLoad>
                </div>
                <div className="flex-grow-1 ms-3">
                    <h3 className="mt-0">Yield Farms</h3>
                    <p> Enter the Cosmic Universe yield farms to earn MAGIC on our native OneFi DEX</p>
                </div>
            </div>
        </>
    )
}