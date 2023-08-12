import React from "react";
import faqList from "../../../assets/json/faq.json";
import {Accordion} from "react-bootstrap";

class FAQ extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: faqList,
            visible: 8,
            error: false
        };

        this.loadMore = this.loadMore.bind(this);
    }

    loadMore() {
        this.setState((prev) => {
            return {visible: prev.visible + 8};
        });
    }

    render() {
        return (
            <section id="faq" className="faq">
                <div className="container">
                    <div className="section-title">
                        <h2>FAQ<small>s</small></h2>
                    </div>
                    <div className="faq-list">
                        <Accordion>
                            {this.state.items.slice(0, this.state.visible).map((item, index) => {
                                return (
                                    <Accordion.Item key={index} eventKey={item.id}>
                                        <Accordion.Header>{item.title}</Accordion.Header>
                                        <Accordion.Body dangerouslySetInnerHTML={{ __html: item.description }}>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                );
                            })}
                        </Accordion>
                        <div className="w-100 text-center mt-5">
                            {this.state.visible < this.state.items.length &&
                                // eslint-disable-next-line jsx-a11y/anchor-is-valid
                            <a onClick={this.loadMore} className="text-porsche next-btn">
                                <i className="fa fa-angle-down"/> More
                            </a>
                            }
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default FAQ;