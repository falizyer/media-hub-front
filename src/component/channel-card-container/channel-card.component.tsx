import * as React from "react";
import {Container, Col, Row} from 'mdbreact';
import {Card, CardBody, CardImage, CardTitle, CardText} from 'mdbreact';

export type ChannelCardPropsObject = {
};

export type ChannelCardStateObject = {
}

export class ChannelCardComponent extends React.PureComponent<ChannelCardPropsObject, ChannelCardStateObject> {

    public constructor(props) {
        super(props);
    }

    render() {
        return (
            <Col className={"col-12 col-sm-6 col-sm-6 col-md-4 col-lg-3"}>
                <Card>
                    <CardImage
                        className="img-fluid"
                        src="https://mdbootstrap.com/img/Photos/Slides/img%20(17).jpg"
                        waves
                    />
                    <CardBody>
                        <CardTitle>Card title</CardTitle>
                        <CardText>
                            Some quick example text to build on the card
                            title
                            and make
                            up the bulk of the card&apos;s content.
                        </CardText>
                    </CardBody>
                </Card>
            </Col>
        );
    }

}

export default ChannelCardComponent;
