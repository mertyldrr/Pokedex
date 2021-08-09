import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { Navbar, Form, Button, FormControl, NavbarBrand } from 'react-bootstrap';
import logo from '../resources/pokedex-logo.png';


const NavigationBar = () => {

  const [search, setSearch] = useState("");
  const history = useHistory();

  return (
    <Navbar className="d-flex position-relative" style={{ backgroundColor: "#D3D3D3" }}>
      <NavbarBrand href="/" style={{ float: 'left' }}>
        <img src={logo} alt="pokedex-logo" style={{ width: 250, marginLeft: 20 }} />
      </NavbarBrand>
      <Form className="d-flex position-absolute" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
        <FormControl type="search" placeholder="Type pokemon name" value={search} onChange={e => setSearch(e.target.value)} />
        <Button style={{ backgroundColor: "#ffe031", color: "#396bba" }} onClick={() => history.push(`/pokemon/${search}`)}>
          <strong>Search</strong>
        </Button>
      </Form>
    </Navbar>
  )
}

export default NavigationBar;