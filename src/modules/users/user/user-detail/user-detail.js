import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { Container, Card, Button, Form, CardTitle, CardText, Row, Col } from 'reactstrap';

import api from '../../../shared/services/api';

export default class UserDetail extends Component {
    state = {
        user: {},
        redirect: false,
    };

    async componentDidMount() {
        const { id } = this.props.match.params;
        
        if (id == null) return;

        const response = await api.get(`/v1/users/${id}`);
        
        if (response.data.docs == null)
            this.setState({ redirect: true });
        
        this.setState({ user: response.data.docs, redirect: false });
    }

    removeUser = async (id) => {
        if (id == null) return;
        
        try {
            await api.delete(`v1/users/${id}`);

            this.setState({ redirect: true });
        }
        catch (ex) {
            console.log(ex);
        }
    }

    render() {
        const { user, redirect } = this.state;

        if (redirect) {
            return <Redirect push to="/app/v1/users" />;
        }

        return (
            <div>
                <Container>
                    <Row>
                        <Col>
                            <Form>
                                <Card body>
                                    <CardTitle>Código: {user.id}</CardTitle>
                                    <CardText>Nome: {user.firstName}.</CardText>
                                    <CardText>Sobrenome: {user.lastName}.</CardText>
                                    <Button onClick={() => this.removeUser(user.id)} outline className="btnSubmity" color="primary" size="lg">Remover</Button>
                                </Card>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}