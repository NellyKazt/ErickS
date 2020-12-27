import React, { Component } from 'react'
import { Button, Container, Form } from 'react-bootstrap'

export default class Contacts extends Component {
    render() {
        return (
            <Container style={{width: '500px'}}>
                <h3 className="text-center">Contact me</h3>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text>I am always in touch with you )</Form.Text>
                    </Form.Group >

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Example textarea</Form.Label>
                        <Form.Control as="textarea" rows="4" />
                    </Form.Group>

                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label = "Check me out"/>
                        
                    </Form.Group>
                    <Button variant="dark" type="submit">Submit</Button>

                </Form>
            </Container>
        )
    }
}
