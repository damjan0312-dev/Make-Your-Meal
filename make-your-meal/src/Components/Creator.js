import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { NavLink } from "react-router-dom";

import { reducer } from "./Helpers/TotalCosts";
import { sort } from "./Helpers/SortCart";

function Creator({ cart }) {
  let items = sort(cart).map(item => {
    return (
      <Row key={item.id}>
        <Col sm={4}>{item.name}</Col>
        <Col sm={2}>x{item.quantity}</Col>
        <Col>
          {" "}
          {item.special_price !== 1 ? (
            <p>{item.price} $</p>
          ) : (
            <p style={{ color: "red" }}>{item.new_price} $</p>
          )}
        </Col>
      </Row>
    );
  });

  const total = cart.reduce(reducer, 0);

  return (
    <div className="h6">
      {items}
      <hr />
      {total === 0 ? (
        ``
      ) : (
        <Row>
          <p style={{ marginLeft: "1rem" }}>Price: {total.toFixed(2)} $</p>
          <NavLink
            className="text-light float-left mr-5 btn btn-success ml-5"
            to="/cart"
          >
            Cart
          </NavLink>
        </Row>
      )}
      <hr />
      <small>
        *Basic offer contains one bun and piece of meat <br />
        **Red prices are articles with special price
      </small>
    </div>
  );
}

export default Creator;
