import * as React from "react";
import {Col, Row} from 'mdbreact';
import {Carousel, CarouselCaption, CarouselInner, CarouselItem, View, Mask} from "mdbreact";
import {Card, CardBody, CardImage, CardTitle, CardText} from 'mdbreact';

import "bootstrap";

import "./application.style.scss";

export class ApplicationComponent extends React.PureComponent {

    public constructor(props) {
        super(props);
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
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

                        <a className="navbar-brand" href="#">Navbar</a>

                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#main-navigation-menu"
                                aria-controls="main-navigation-menu" aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="main-navigation-menu">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <a className="nav-link" href="#">Home
                                        <span className="sr-only">(current)</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Features</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Pricing</a>
                                </li>

                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink"
                                       data-toggle="dropdown" aria-haspopup="true"
                                       aria-expanded="false">Dropdown</a>
                                    <div className="dropdown-menu dropdown-primary"
                                         aria-labelledby="navbarDropdownMenuLink">
                                        <a className="dropdown-item" href="#">Action</a>
                                        <a className="dropdown-item" href="#">Another action</a>
                                        <a className="dropdown-item" href="#">Something else here</a>
                                    </div>
                                </li>

                            </ul>

                            <form className="form-inline">
                                <div className="md-form my-0">
                                    <input className="form-control mr-sm-2" type="text" placeholder="Search"
                                           aria-label="Search"/>
                                </div>
                            </form>
                        </div>

                    </nav>
                </header>
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
                                        <CarouselItem itemId={index + 1}>
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
                <div className={"container"}>
                    <h2>Some channel 1</h2>
                    <Row className={"dynamic-carousel-row"}>
                        {channelCarousel.map(channel => {
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
                        })}
                    </Row>
                    <h2>Some channel 2</h2>
                    <Row className={"dynamic-carousel-row"}>
                        {channelCarousel.map(channel => {
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
                        })}
                    </Row>
                </div>
                <footer></footer>
            </main>
        );
    }
}
