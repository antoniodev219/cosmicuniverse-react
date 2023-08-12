import nft_1 from '../assets/img/overview/9.png'
import nft_2 from '../assets/img/overview/10.png'
import nft_3 from '../assets/img/overview/11.png'
import nft_4 from '../assets/img/overview/12.png'

export const NFTItems = () => {
    return (
        <>
            <div className="item d-flex align-items-center flex-wrap flex-sm-nowrap mb-3 mt-3">
                <div className="flex-shrink-0">
                    <img src={nft_1} alt="nft_1" />
                </div>
                <div className="flex-grow-1 ms-3">
                    <h3 className="mt-0">Character NFTs</h3>
                    <p>NFTs for 3D playable characters developed completely in Unreal Engine</p>
                </div>
            </div>
            <div className="item d-flex align-items-center flex-wrap flex-sm-nowrap mb-3 mt-3">
                <div className="flex-shrink-0">
                    <img src={nft_2} alt="nft_2" />
                </div>
                <div className="flex-grow-1 ms-3">
                    <h3 className="mt-0">Land NFTs</h3>
                    <p> Land plots that you build on and earn daily rewards. The more land you have, the more rewards you earn.</p>
                </div>
            </div>
            <div className="item d-flex align-items-center flex-wrap flex-sm-nowrap mb-3 mt-3">
                <div className="flex-shrink-0">
                    <img src={nft_3} alt="nft_3" />
                </div>
                <div className="flex-grow-1 ms-3">
                    <h3 className="mt-0">Building NFTs</h3>
                    <p>Buildable structures ranging from small shelters covering a fraction of one land plot to sprawling resorts covering 10 land plots.</p>
                </div>
            </div>
            <div className="item d-flex align-items-center flex-wrap flex-sm-nowrap mb-3 mt-3">
                <div className="flex-shrink-0">
                    <img src={nft_4} alt="nft_4" />
                </div>
                <div className="flex-grow-1 ms-3">
                    <h3 className="mt-0">Resource & Item NFTs</h3>
                    <p>Resources like wood, stone, ore, and crystal, as well as items like artifacts, potions, and much more.</p>
                </div>
            </div>
        </>
    )
}