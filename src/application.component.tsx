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
        const navLinks = [{
            title: "Home",
            href: "#"
        }, {
            title: "Contact",
            href: "#"
        }];
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
                                aria-controls="main-navigation-menu" aria-expanded="false" aria-label="Toggle navigation">
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
                                           aria-label="Search" />
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
                    <div className={"row"}>

                    </div>
                </div>
                <footer></footer>
            </main>
        );
    }
}
