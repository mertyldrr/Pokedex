import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { Navbar, Nav, Form, Button, FormControl, NavbarBrand } from 'react-bootstrap';
import logo from '../resources/pokedex-logo.png';


const NavigationBar = () => {

  const [search, setSearch] = useState("");
  const history = useHistory();

  return (
    <Navbar style={{ backgroundColor: "#D3D3D3" }}>
      <Nav className="d-flex justify-content-start">
        <NavbarBrand href="/">
          <img src={logo} alt="pokedex-logo" style={{ width: 250, marginLeft: 20 }} />
        </NavbarBrand>
      </Nav>
      <Nav className="d-flex flex-grow-1 justify-content-center">
        <Form className="d-inline-flex">
          <FormControl
            type="search"
            placeholder="Type pokemon name"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <Button
            style={{ backgroundColor: "#ffe031", color: "#396bba" }}
            onClick={() => history.push(`/pokemon/${search}`)}
          >
            <strong>Search</strong>
          </Button>
        </Form>
      </Nav>
    </Navbar>
  )
}

export default NavigationBar;