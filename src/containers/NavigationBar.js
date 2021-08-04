import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { Navbar, Form, Button, FormControl } from 'react-bootstrap';



const NavigationBar = () => {

  const [search, setSearch] = useState("");
  const history = useHistory();

  return (
    <Navbar className="d-flex justify-content-center">
      <Form className="d-inline-flex">
        <FormControl
          type="search"
          placeholder="Search"
          value={search}
          onChange={e => setSearch(e.target.value)}  
        />
        <Button 
        variant="outline-warning"
        onClick={() => history.push(`/pokemon/${search}`)}
        >Search</Button>
      </Form>
    </Navbar>
  )
}

export default NavigationBar;