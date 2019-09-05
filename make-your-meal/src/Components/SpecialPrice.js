import React, { Component } from "react";

import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import BtnAdd from "./Helpers/BtnAdd";
import BtnRemove from "./Helpers/BtnRemove";

import { bindActionCreators } from "C:/Users/Veljko/AppData/Local/Microsoft/TypeScript/3.5/node_modules/redux";

import { add_to_cart, remove_from_cart } from "../Actions/actions";

import { connect } from "react-redux";

class SpecialPrice extends Component {
  special_drinks = this.props.drinks.filter(item => item.special_price === 1);

  render() {
    return this.special_drinks.map(item => {
      return (
        <Col key={item.id}>
          <Card style={{ width: "14rem", margin: "1rem" }}>
            <Card.Img variant="top" src={item.image} />
            <Card.Body className="text-center">
              <Card.Title>
                <b>{item.name}</b> <br />
                <p style={{ textDecorationLine: "line-through" }}>
                  {item.price} $
                </p>
                <b style={{ color: "red" }}>NEW PRICE: {item.new_price} $</b>
              </Card.Title>
              <Row>
                <Col sm={8}>
                  <BtnAdd
                    key={item.id}
                    addToCart={this.props.add_to_cart}
                    itemToAdd={item}
                    itemExist={
                      this.special_drinks.filter(
                        cartItem => cartItem.id === item.id
                      )[0]
                    }
                  />
                </Col>
                <Col sm={4}>
                  <BtnRemove
                    key={item.id}
                    removeFromCart={this.props.remove_from_cart}
                    itemToRemove={item}
                  />
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      );
    });
  }
}

const mapStateToProps = state => ({
  drinks: state.addons_reducer.drinks
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      add_to_cart,
      remove_from_cart
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SpecialPrice);
