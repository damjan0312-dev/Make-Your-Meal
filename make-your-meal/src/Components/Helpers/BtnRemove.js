import React from "react";

import Button from "react-bootstrap/Button";

const BtnRemove = props => {
  return (
    <div>
      <Button
        variant="danger"
        className="m-2"
        onClick={() => props.removeFromCart(props.itemToRemove)}
      >
        -
      </Button>
    </div>
  );
};

export default BtnRemove;
