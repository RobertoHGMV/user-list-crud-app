import React, { Component } from 'react';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

import api from '../../shared/services/api';

export default class User extends Component {
    state = {
        add: true,
        id: '',
        firstName: '',
        lastName: ''
    };

    componentDidMount() {
        const { id } = this.props.match.params;

        if (id == null) return;

        try {
            this.setUserState(id);
        } catch (ex) {
            console.log(ex);
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();

        try {
            if (this.state.add)
                this.addUser();
            else
                this.updateUser();
        } catch (ex) {
            console.log(ex);
        }
    }

    handleChange = (e) => {
        const target = e.target;
        const name = target.name;

        this.setState({ [name]: target.value });
    }

    setUserState = async (id) => {
        const response = await api.get(`/v1/users/${id}`);

        this.setState({ add: false, ...response.data.docs });
    }

    addUser = () => {
        api.post(`/v1/users`, {
            FirstName: this.state.firstName,
            LastName: this.state.lastName
        });
    }

    updateUser = () => {
        api.put(`/v1/users`, {
            Id: this.state.id,
            FirstName: this.state.firstName,
            LastName: this.state.lastName
        });
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <Form ref="userform">
                            <FormGroup>
                                <Label for="userId">Código: {this.state.id}</Label>
                            </FormGroup>
                            <FormGroup>
                                <Label for="firstName">Nome</Label>
                                <Input value={this.state.firstName} onChange={this.handleChange} type="text" name="firstName" id="firstName" placeholder="Digite o nome"></Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="lastName">Sobrenome</Label>
                                <Input value={this.state.lastName} onChange={this.handleChange} type="text" name="lastName" id="lastName" placeholder="Digite o sobrenome"></Input>
                            </FormGroup>
                            <Button onClick={(e) => this.handleSubmit(e)} outline className="btnSubmity" color="primary" size="lg">{this.state.add ? "Adicionar" : "Atualizar"}</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        );
    }
}