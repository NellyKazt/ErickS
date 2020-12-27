import React,  {Component}  from 'react';
import {Container, Nav, Navbar}  from 'react-bootstrap';
//import Switch from 'react-bootstrap/esm/Switch';
//import { Route, Router } from 'react-router-native';
import logo from './01logo192.png';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Contacts from '../pages/Contacts';
import Portfolio from '../pages/Portfolio';
import Event from '../pages/Event';

export default class header extends Component {
    render() {
        return (
            <div>             
                <Navbar collapseOnSelect expand="md" bg="light" variant="light">
                    <Container>
                        
                        <Navbar.Brand href="/"> 
                            <img src={logo} height="30" width="30" className="d-inline-block align-top"
                            alt = "Logo Fedor Nozdrin"/>
                        </Navbar.Brand>

                        {/*панель меню*/}
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="/about">About me</Nav.Link>
                                <Nav.Link href="/portfolio">Portfolio</Nav.Link>
                                <Nav.Link href="/event">Event</Nav.Link>
                                <Nav.Link href="/contacts">Contacts</Nav.Link>
                               
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <Router>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/portfolio" component={Portfolio} />
                        <Route exact path="/event" component={Event} />
                        <Route exact path="/contacts" component={Contacts} />
                    </Switch>
                </Router>


            </div>
        )
    }
}
