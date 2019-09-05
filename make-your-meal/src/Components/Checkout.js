import React, { Component } from "react";

import { connect } from "react-redux";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { bindActionCreators } from "C:/Users/Veljko/AppData/Local/Microsoft/TypeScript/3.5/node_modules/redux";

import { add_order } from "../Actions/actions";

import { reducer } from "./Helpers/TotalCosts";

class Checkout extends Component {
  state = {
    address: {},
    phone_number: {},
    code: {},
    totalCosts: 0,
    discounted: 0
  };

  componentDidMount() {
    this.setState({
      totalCosts: this.props.cart.reduce(reducer, 0).toFixed(2)
    });
  }

  setAddress = e => {
    let newadd = e.target.value;
    this.setState({
      address: newadd
    });
  };

  setPhoneNumber = e => {
    this.setState({
      phone_number: e.target.value
    });
  };

  submitOrder = e => {
    e.preventDefault();

    const order = {
      burger_items: this.props.cart.map(
        item => `Name: ${item.name}, Quantity: ${item.quantity}`
      ),
      address: this.state.address,
      phoneNumber: this.state.phone_number,
      totalCosts: this.state.totalCosts
    };
    this.props.add_order(order);

    this.setState({
      totalCosts: 0
    });
  };

  checkCode = e => {
    this.setState({
      code: e.target.value
    });
  };
  discount = e => {
    let withDiscount = (this.state.totalCosts * 0.9).toFixed(2);
    if (this.state.code === "1234" && this.state.discounted === 0) {
      this.setState({
        totalCosts: withDiscount,
        discounted: 1
      });
    }
  };

  removeCartAfterOrderIsSuccesfull = () => {
    this.setState({
      totalCosts: 0
    });
    this.props.remove_cart();
  };

  render() {
    return (
      <div>
        <div
          style={{ margin: "5rem 30rem 5rem 30rem" }}
          hidden={this.state.totalCosts === 0}
        >
          <Row>
            <p>Your cart contains Burger with:</p>
          </Row>
          <hr />
          {this.props.cart.map(item => {
            return (
              <div key={item.id}>
                <Row>
                  <Col sm={2}>{item.name}</Col>
                  <hr />
                  <Col>Quantity: {item.quantity}</Col>
                </Row>
              </div>
            );
          })}
          <hr />
          <Row>
            <Col>
              <p className="float-left h5">
                {" "}
                Total costs: {this.state.totalCosts} $
              </p>
            </Col>
            <Col>
              <small>Do you have our discount code?</small>
              <input onChange={e => this.checkCode(e)}></input>
              {this.state.discounted === 1 ? (
                <p>Congrats! You got 10% off!</p>
              ) : (
                ``
              )}
              <Button
                className="btn btn-outline-success btn-sm ml-2"
                onClick={e => this.discount(e)}
              >
                Check
              </Button>
            </Col>
          </Row>
          <hr />
          <Row>
            <Form className="w-50">
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Your address:</Form.Label>
                <Form.Control
                  type="address"
                  placeholder="Enter address"
                  onChange={e => this.setAddress(e)}
                />

                <Form.Label>Phone number</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter phone number"
                  onChange={e => this.setPhoneNumber(e)}
                />
              </Form.Group>
            </Form>
          </Row>
          <hr />
          <Row>
            <Button
              variant="warning"
              disabled={this.state.totalCosts === 0}
              onClick={e => this.submitOrder(e)}
            >
              Order your Meal
            </Button>
          </Row>
        </div>
        <div>
          {this.props.order_state === "ok" ? (
            <div>
              <p
                style={{ fontWeight: "bold", marginTop: "2rem" }}
                hidden={this.state.totalCosts !== 0}
              >
                YOUR BURGER IS SUCCESSFULLY ORDERED, IT WILL BE DELIEVERED IN 30
                MINUTES <br /> THANK YOU FOR TRUSTING US
              </p>
            </div>
          ) : (
            ``
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cart_reducer,
  order_state: state.add_order_reducer.order_pending
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      add_order
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Checkout);
