import * as React from "react";
import {Container, Col, Row} from 'mdbreact';

import "bootstrap";

import "./application.style.scss";

import {NavBarComponent as NavBar} from "./component/nav-bar";
import {TopChannelContainerComponent as TopChannelList} from "./component/top-channel-container";
import {ChannelCardContainerComponent as ChannelCardContainer} from "./component/channel-card-container"

export class ApplicationComponent extends React.PureComponent {

    public constructor(props) {
        super(props);
    }

    private onXReachEnd(key) {

        return function(element) {
            console.log(element, key);
        };
    }

    /**
     * @override
     */
    public componentDidMount() {

    }

    /**
     * @override
     */
    public render() {
        const channelCarousel = [{}, {}, {}, {}];
        const slides = [{
            url: "https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg",
            title: "First",
            content: "First content"
        }, {
            url: "https://mdbootstrap.com/img/Photos/Slides/img%20(99).jpg",
            title: "Second",
            content: "Second content"
        }, {
            url: "https://mdbootstrap.com/img/Photos/Slides/img%20(17).jpg",
            title: "Third",
            content: "Third content"
        }];
        return (
            <main className={"application-main-wrap"}>
                <h1>The Media Hub</h1>
                <header>
                    <NavBar/>
                </header>
                <TopChannelList channels={slides}/>
                <Container>
                    <ChannelCardContainer key={0}
                                          channels={channelCarousel}
                                          onXReachEnd={this.onXReachEnd(0)} />
                    <ChannelCardContainer key={0}
                                          channels={channelCarousel}
                                          onXReachEnd={this.onXReachEnd(0)} />
                    <ChannelCardContainer key={0}
                                          channels={channelCarousel}
                                          onXReachEnd={this.onXReachEnd(0)} />
                </Container>
            </main>
        );
    }
}
