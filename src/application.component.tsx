import * as React from "react";
import {Carousel, CarouselCaption, CarouselInner, CarouselItem, View, Mask} from "mdbreact";

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
                                data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                                <li className="nav-item active">
                                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Link</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link disabled" href="#">Disabled</a>
                                </li>
                            </ul>
                            <form className="form-inline my-2 my-lg-0">
                                <input className="form-control mr-sm-2" type="search" placeholder="Search"/>
                                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search
                                </button>
                            </form>
                        </div>
                    </nav>
                </header>
                <section className={"top-channels-carousel"}>
                    <Carousel activeItem={1} length={slides.length} showControls={true} showIndicators={true} className="z-depth-1">
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
                    <div className={"row"}>

                    </div>
                </div>
                <footer></footer>
            </main>
        );
    }
}
