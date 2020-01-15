import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Table } from 'reactstrap';

// import './user-list.css';

import api from "../shared/services/api";

export default class UserList extends Component {
    state = {
        users: [],
        userInfo: {},
        page: 1
    }

    componentDidMount() {
        this.loadUsers();
    }

    loadUsers = async (page = 1) => {
        const response = await api.get(`v1/users`);
        const users = response.data.docs;
        this.setState({ users: users });
    }

    removeUser = (id) => {
        if (id == null) return;

        try {
            api.delete(`v1/users/${id}`);

            this.loadUsers();
        }
        catch (ex) {
            console.log(ex);
        }
    }

    render() {
        const { users } = this.state;

        return (
            <div className="user-list">
                <Container>
                    <Table dark striped hover responsive>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Nome</th>
                                <th>Sobrenome</th>
                                <th>Nome Completo</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map(user => (
                                <tr key={user.id}>
                                    <th scope="row">{user.id}</th>
                                    <td>{user.firstName}</td>
                                    <td>{user.lastName}</td>
                                    <td>{user.fullName}</td>
                                    <td><Link to={`/app/v1/users/${user.id}/edit`}>Editar</Link></td>
                                    <td><Link to={`/app/v1/users/${user.id}`}>Visualizar</Link></td>
                                    {/* <td onClick={this.removeUser(user.id)}><Link to="#">Remover</Link></td> */}
                                    <td></td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Container>
            </div>
        );
    }
}