import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

import logo from '../../assets/img/logo.svg';

import './styles.css';

export default class Welcome extends Component {
  render() {
    return (
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>CRUD de Usuários</p>
          <Button className="btnLogin" color="primary" size="lg" tag={Link} to="/app">Login</Button>{' '}
        </header>
    );
  }
}
