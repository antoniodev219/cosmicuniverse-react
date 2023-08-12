import React, {useEffect} from "react";

export const CommunityGuidelines = () => {
    useEffect(message => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <section id="community-guidelines" className="extra-pages">
                <div className="container">
                    <div className="section-title pb-0 pt-5">
                        <h2>Community Guidelines</h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card">
                                <p>Cosmic Universe is more than just a game...it's a
                                    community. A cooperative and wholesome culture is what we are committed to
                                    instilling within the community. Together, we are nurturing the cultivation of a
                                    model community other projects can turn to and emulate.</p>
                                <p>To ensure we have a respectful and positive
                                    community, we have a set of community guidelines in place that everyone, both the
                                    Cosmic Universe team and its community, abide by. These Community Guidelines reflect
                                    our values and are expected to be followed by everyone in the community, which
                                    includes the Cosmic Universe team, community members, and anyone representing Cosmic
                                    Universe or is affiliated with it.</p>
                                <p>If you have any questions about any of these, feel
                                    free to contact us on any one of our social media channels. We are always looking to
                                    improve.</p>
                                <p>All community members should do their best to do the
                                    following:</p>
                                <p><br/></p>
                                <p><strong>1. Follow the Golden Rule</strong></p>
                                <p>Treat others as you would like to be treated. Be
                                    excellent to one another. Avoid intentionally causing harm to anyone.</p>
                                <p><strong>2. Be respectful</strong></p>
                                <p>Consider how others will feel when you say or do
                                    something. If there are disagreements, resolve them respectfully.</p>
                                <p><strong>3. Have personal responsibility.</strong></p>
                                <p>Be responsible with your words and actions. If you
                                    make a mistake in some way, acknowledge it and strive to make it right.</p>
                                <p><strong>4. Ask for help when you need it.</strong>
                                </p>
                                <p>Anyone who joins the Cosmic Universe community
                                    already knows how helpful community members are. There is no such thing as a stupid
                                    question, and there is no need to feel embarrassed about asking a question related
                                    to the project and game. Asking questions will help you avoid potential issues in
                                    the future. If you are unsure where to ask a particular question, you can always ask
                                    in the general channel of a given social media platform we use or DM a Cosmic
                                    Universe team member.</p>
                                <p><strong>5. Collaborate and co-create</strong></p>
                                <p>Cosmic Universe is possible thanks to the collective
                                    effort of many creative ideas and insights. If you have a good idea about anything
                                    that can improve the game or community, let us know!</p>
                                <p><strong>6. Find consensus for challenges</strong>
                                </p>
                                <p>There will be times when there is a plurality of
                                    community members that do not see things the same way. In those moments,
                                    disagreements should be resolved in a constructive manner. If this still proves to
                                    be challenging, either a community vote or a Cosmic DAO vote will be held until
                                    consensus is reached.</p>
                                <p><strong>7. Cultivate a kind and inclusive
                                    community.</strong></p>
                                <p>We are proud of the kind and inclusive community we
                                    have created, and we encourage everyone to reinforce our values. Together, we can
                                    make this the best community in the entire crypto space!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default CommunityGuidelines;
