import React from "react";

import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import BtnAdd from "./Helpers/BtnAdd";
import BtnRemove from "./Helpers/BtnRemove";

function AddonsListItem(props) {
  return (
    <Col>
      <Card style={{ width: "13rem", margin: "1rem" }}>
        <Card.Img variant="top" src={props.addon.image} />
        <Card.Body className="text-center">
          <Card.Title>
            <b>
              {props.addon.special_price !== 1 ? (
                <p>
                  {props.addon.name} {props.addon.price} $
                </p>
              ) : (
                <div>
                  <p style={{ color: "red" }}>ACTION</p>
                  <p>{props.addon.name}</p>
                  <p style={{ textDecorationLine: "line-through" }}>
                    {props.addon.price} $
                  </p>
                  <p style={{ color: "red" }}>
                    NEW PRICE{props.addon.new_price} $
                  </p>
                </div>
              )}
            </b>
          </Card.Title>
          <Row>
            <Col sm={8}>
              <BtnAdd
                addToCart={props.addToCart}
                itemToAdd={props.addon}
                itemExist={props.cartItem}
              />
            </Col>
            <Col sm={4}>
              <BtnRemove
                removeFromCart={props.removeFromCart}
                itemToRemove={props.cartItem}
              />
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default AddonsListItem;
