import React, { Component } from 'react'
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap';
import '../pages/StyleN.css'

export default class About extends Component {
    render() {
        return (
            <Container>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                            {/*боковая панель меню*/}
                            <Nav variant = "pills" className="flex-column mt-2">  
                                <Nav.Item >
                                    <Nav.Link eventKey="one"> ERICK OH </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="two"> DIRECTOR FILMOGRAPHY </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="three"> ANIMATOR FILMOGRAPHY </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            {/*содержание вкладок*/}
                            <Tab.Content>
                                <Tab.Pane eventKey="one" >
                                    <p> Director at Tonko House</p>
                                    <p> Artist at Beasts And Natives Alike </p>
                                    <p> Former Animator at Pixar Animation Studios </p>
                                    
                                    <p> Erick Oh 
                                        is a Korean filmmaker / artist based in California, USA. 
                                        His films have been introduced and awarded at numerous film 
                                        festivals including Academy Awards, Annie Awards, 
                                        Annecy Animation Festival, Zagreb Film Festival, SIGGRAPH, 
                                        Anima Mundi and more. With his background in fine art in Seoul National University, 
                                        Korea and film at UCLA, USA, Erick became an animator at 
                                        Pixar Animation Studios from 2010 to 2016. Then Erick joined Tonko House 
                                        with his fellow former Pixar artists and directed 'PIG : The Dam Keeper Poems' 
                                        which won the Crystal Award at Annecy Animation Festival 2018.  
                                        Erick is currently working on a variety of projects with his partners in film/animation, 
                                        VR/AR industry and contemporary art scene in US and South Korea.</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="two">
                                    <img scr=""/>
                                    <p>2021 Namoo (work in progress)</p>
                                    <p>2020 Opera</p>
                                    <p>2018 How to Paint your Rainbow </p>    
                                    <p>2017 PIG : The Dam Keeper Poems (Tonko House / Hulu Japan)</p> 
                                    <p>2017 Totality (Rainbow Astro)</p> 
                                    <p>2016 PRADA Zurich & Hong Kong (2x4)</p> 
                                    <p>2016 O Animated Poetry series</p>    
                                    <p>2015 O</p>    
                                    <p>2014 Günther</p>    
                                    <p>2011 How to Eat Your Apple</p>    
                                    <p>2010 Heart</p>    
                                    <p>2009 Hubo</p>   
                                    <p>2009 One</p>    
                                    <p>2008 Communicate</p>    
                                    <p>2008 Symphony</p>   
                                    <p>2008 Way Home</p>    
                                    <p>2006 The Bag</p>                                   
                                </Tab.Pane>
                                <Tab.Pane eventKey="three">
                                    <img scr=""/>
                                    <p>2017 Lou (Pixar Animation Studios)</p>
                                    <p>2016 Finding Dory (Pixar Animation Studios)</p>
                                    <p>2016 Piper (Pixar Animation Studios)</p>
                                    <p>2015 Sanjay's Super Team (Pixar Animation Studios)</p>
                                    <p>2015 Inside Out (Pixar Animation Studios)</p>
                                    <p>2013 The Dam Keeper (Tonko House)</p>
                                    <p>2013 Toy Story of Terror (Pixar Animation Studios)</p>
                                    <p>2013 Monsters University (Pixar Animation Studios)</p>
                                    <p>2012 Brave (Pixar Animation Studios)</p>
                                    <p>2011 Cars 2 (Pixar Animation Studios)</p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        )
    }
}
