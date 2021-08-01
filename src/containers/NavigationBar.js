import { Navbar, Form, Button, FormControl } from 'react-bootstrap';

const NavigationBar = () => {
  return (
    <Navbar className="d-flex justify-content-center">
      <Form className="d-inline-flex">
        <FormControl
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <Button variant="outline-warning">Search</Button>
      </Form>
    </Navbar>
  )
}

export default NavigationBar;