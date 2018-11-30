import * as React from "react";
import {
    Button,
    Navbar,
    NavbarBrand,
    NavbarNav,
    NavItem,
    NavLink,
    NavbarToggler,
    Collapse,
    FormInline,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from "mdbreact";

export type NavBarPropsObject = {};

export type NavBarStateObject = {
    isOpen: boolean;
}

import "./nav-bar.style.scss";

export class NavBarComponent extends React.PureComponent<NavBarPropsObject, NavBarStateObject> {

    public constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
    }

    private toggleCollapse(): void {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    public render() {
        return (
            <Navbar className={"bg-dark navbar-dark"} expand="md">
                <NavbarBrand>
                    <strong className="white-text">tMH</strong>
                </NavbarBrand>
                <NavbarToggler onClick={this.toggleCollapse.bind(this)}/>
                <Collapse
                    id="navbarCollapse3"
                    isOpen={this.state.isOpen}
                    navbar>
                    <NavbarNav left>
                        <NavItem active>
                            <NavLink to="#!">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="#!">Features</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="#!">Pricing</NavLink>
                        </NavItem>
                    </NavbarNav>
                </Collapse>
            </Navbar>
        );
    }
}

export default NavBarComponent;
