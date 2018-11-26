import * as React from "react";

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
        return (
            <main>
                <h1>The Media Hub</h1>
                <header>
                </header>
                <section>

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
