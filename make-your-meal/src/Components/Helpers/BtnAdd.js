import React from "react";

import Button from "react-bootstrap/Button";

const BtnAdd = props => {
  return (
    <div>
      <Button
        variant="success"
        className="m-2"
        onClick={() => props.addToCart(props.itemToAdd)}
      >
        + ({(props.itemExist && props.itemExist.quantity) || 0})
      </Button>
    </div>
  );
};

export default BtnAdd;
