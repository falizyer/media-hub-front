import * as React from "react";
import {Carousel, CarouselCaption, CarouselInner, CarouselItem, View, Mask} from "mdbreact";

export type TopChannelContainerPropsObject = {
    channels: {
        url: string;
        title: string;
        content: string;
    }[]
};

export type TopChannelContainerStateObject = {
}

import "./top-channel-container.style.scss";

export class TopChannelContainerComponent extends React.PureComponent<TopChannelContainerPropsObject, TopChannelContainerStateObject> {

    public constructor(props) {
        super(props);
    }

    render() {
        const slides = this.props.channels;
        return (
            <section className={"top-channels-carousel"}>
                <Carousel activeItem={1}
                          length={slides.length}
                          showControls={true}
                          showIndicators={true}
                          className="z-depth-1">
                    <CarouselInner>
                        {
                            slides.map((slide, index) => {
                                return (
                                    <CarouselItem key={index} itemId={index + 1}>
                                        <View>
                                            <img className="d-block w-100"
                                                 src={slide.url}
                                                 alt="First slide"/>
                                            <Mask overlay="black-light"/>
                                        </View>
                                        <CarouselCaption>
                                            <h3 className="h3-responsive">{slide.title}</h3>
                                            <p>{slide.content}</p>
                                        </CarouselCaption>
                                    </CarouselItem>
                                );
                            })
                        }
                    </CarouselInner>
                </Carousel>
            </section>
        );
    }
}

export default TopChannelContainerComponent;
