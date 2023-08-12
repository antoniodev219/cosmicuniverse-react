import discord from "../../../assets/img/icons/discord-1.png";

const NeedHelp = () => {
    return (
        <div id="need_help">
                <a className="desktop-view" href="https://discord.gg/cosmic-universe" target="_blank" rel="noreferrer">
                <div className="box">
                        <div className="box-text">Need help?</div>
                        <div className="img">
                            <img src={discord} width="36" alt="Join Discord"/>
                        </div>
                        <div className="join-discord">Join our Discord</div>
                </div>
            </a>
            <a className="mobile-view" href="https://discord.gg/cosmic-universe" target="_blank" rel="noreferrer">
                <div className="img">
                    <img src={discord} width="24" alt="Join Discord"/>
                </div>
            </a>

        </div>
    )
}

export default NeedHelp;