import React, { Component } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

export default class Contacts extends Component {
    render() {
        return (
            <Container style={{ width: '500px' }}>
                <h1>
                    Contact Us
                </h1>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>
                            Your Email Adress
                        </Form.Label>
                        <Form.Control type="email" placeholder="Tralala"></Form.Control>
                        <Form.Text>Your inputs are secured</Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>
                            Example text
                        </Form.Label>
                        <Form.Control as="textarea" rows="3"></Form.Control>
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me Out"></Form.Check>
                    </Form.Group>
                    <Button variant="primary" type="submit">Ok</Button>
                </Form>

            </Container>
        )
    }
}
