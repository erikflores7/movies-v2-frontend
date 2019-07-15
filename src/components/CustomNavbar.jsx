import React, {Component} from 'react';
import {Form, FormControl, Button, Navbar, NavDropdown, Nav} from 'react-bootstrap';

export default class CustomNavbar extends Component{
    render(){
        return(
            <Navbar bg={"dark"} variant={"dark"}>
                <Navbar.Brand href={"/"}>Movies</Navbar.Brand>
                <Nav className={"mr-auto"}>
                    <Nav.Link href={"/"}>Home</Nav.Link>
                    <Nav.Link href={"/latest"}>Latest</Nav.Link>
                    <Nav.Link href={"/upcoming"}>Upcoming</Nav.Link>
                    <NavDropdown title={"Sort By..."} id={"basic-nav-dropdown"}>
                        <NavDropdown.Item href={"/sort.html?genre=Horror"}>Horror</NavDropdown.Item>
                        <NavDropdown.Item href={"/sort.html?genre=Thriller"}>Thriller</NavDropdown.Item>
                        <NavDropdown.Divider/>
                        <NavDropdown.Item href={"/sort.html?rating=top"}>Top Rated</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Form inline>
                    <FormControl type={"text"} placeholder={"Find Movies..."} classname={"mr-sm-2"}/>
                    <Button type={"submit"}>Search</Button>
                </Form>
            </Navbar>
        );
    }
}