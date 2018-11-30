import * as React from "react";
import {Container, Col, Row} from "mdbreact";

import {ScrollBarComponent as PerfectScrollbar} from "common/perfect-scrollbar";
import ChannelCard from "./channel-card.component";

export type ChannelCardContainerPropsObject = {
    channels: any[];
    onXReachEnd?: (a, b) => void
};

export type ChannelCardContainerStateObject = {};

import "./channel-card-container.style.scss";

export class ChannelCardContainerComponent extends React.PureComponent<ChannelCardContainerPropsObject, ChannelCardContainerStateObject> {

    public constructor(props) {
        super(props);
    }

    public render() {
        const {channels, onXReachEnd} = this.props;
        return [
            <h2 key={0}>Some channel 1</h2>,
            <PerfectScrollbar key={1}
                              className={"row channel-card-container-inner"}
                              onXReachEnd={onXReachEnd}>
                {
                    channels.map((channel, index) => <ChannelCard key={index}/>)
                }
            </PerfectScrollbar>
        ];
    }
}

export default ChannelCardContainerComponent;
