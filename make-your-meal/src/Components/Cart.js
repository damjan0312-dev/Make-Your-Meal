import React, { Component } from "react";
import { connect } from "react-redux";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

import { reducer } from "./Helpers/TotalCosts";

import "../Style/Cart.scss";

import BtnAdd from "./Helpers/BtnAdd";
import BtnRemove from "./Helpers/BtnRemove";

import { add_to_cart, remove_from_cart } from "../Actions/actions";

import { bindActionCreators } from "C:/Users/Veljko/AppData/Local/Microsoft/TypeScript/3.5/node_modules/redux";

import { sort } from "./Helpers/SortCart";

import { NavLink } from "react-router-dom";
import SpecialPrice from "./SpecialPrice";

class Cart extends Component {
  render() {
    return (
      <div>
        <div>
          Take a look at drinks with special price!
          <Row className="d-flex justify-content-center">
            <SpecialPrice />
          </Row>
        </div>
        <hr />
        <Container className="text-center">
          <h3>YOUR CART</h3>
          <hr />
          {sort(this.props.items).map(item => {
            return (
              <div key={item.id} className="text-weight-bold">
                <Row id="cart container">
                  <Col sm={2}>
                    <img src={item.image} alt="" />
                  </Col>
                  <Col sm={2}>{item.name}</Col>
                  <Col sm={2}>Quantity: {item.quantity}</Col>
                  <Col sm={2}>
                    {item.special_price !== 1 ? (
                      <p>{item.price} $</p>
                    ) : (
                      <p style={{ color: "red" }}>{item.new_price} $</p>
                    )}
                  </Col>
                  <Col sm={2}>
                    <BtnAdd
                      key={item.id}
                      addToCart={this.props.add_to_cart}
                      itemToAdd={item}
                      itemExist={
                        this.props.items.filter(
                          cartItem => cartItem.id === item.id
                        )[0]
                      }
                    />
                  </Col>
                  <Col sm={2}>
                    <BtnRemove
                      key={item.id}
                      removeFromCart={this.props.remove_from_cart}
                      itemToRemove={item}
                    />
                  </Col>
                </Row>

                <hr />
              </div>
            );
          })}

          <Row>
            <Col sm={6} />
            <Col sm={6}>
              <p className="h1 float-right">
                Total costs: {this.props.items.reduce(reducer, 0).toFixed(2)}$
              </p>
            </Col>
          </Row>
          <Row>
            <Col sm={6} />
            <Col sm={6}>
              <Button className="btn-success btn-lg float-right">
                <NavLink className="text-light" to="/checkout">
                  Checkout
                </NavLink>
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  items: state.cart_reducer
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
)(Cart);
