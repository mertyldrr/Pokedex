import React from 'react';
import { Button } from "react-bootstrap";

const Pokemon = (props) => {
  console.log("props", props);
  return (
    <div>
      <Button variant="warning">Pokemon</Button>
    </div>
  )
};

export default Pokemon;