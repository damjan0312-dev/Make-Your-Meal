/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import { bindActionCreators } from "redux";

import {
  request_addons,
  add_to_cart,
  remove_from_cart,
  request_drinks
} from "../Actions/actions";
import { connect } from "react-redux";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import AddonsListItem from "./AddonsListItem";

import "../Style/AddonsList.scss";

import Creator from "./Creator";

class AddonsList extends Component {
  componentDidMount() {
    this.props.request_addons();
  }

  render() {
    return this.props.addons.length ? (
      <div>
        <Row>
          <Col sm={3}>
            <Creator cart={this.props.cart} />
          </Col>
          <Col sm={9}>
            <Row className="d-flex justify-content-center">
              <Col>
                <h3>FOOD</h3>
                <hr />
                <Row>
                  {this.props.addons.map(addon => (
                    <AddonsListItem
                      addon={addon}
                      addToCart={this.props.add_to_cart}
                      removeFromCart={this.props.remove_from_cart}
                      key={addon.id}
                      cartItem={
                        this.props.cart.filter(
                          cartItem => cartItem.id === addon.id
                        )[0]
                      }
                    />
                  ))}
                </Row>
              </Col>
            </Row>
            <Row className="d-flex justify-content-center">
              <Col>
                <h3>DRINKS</h3>
                <hr />
                <Row>
                  {this.props.drinks.map(addon => (
                    <AddonsListItem
                      addon={addon}
                      addToCart={this.props.add_to_cart}
                      removeFromCart={this.props.remove_from_cart}
                      key={addon.id}
                      cartItem={
                        this.props.cart.filter(
                          cartItem => cartItem.id === addon.id
                        )[0]
                      }
                    />
                  ))}
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    ) : (
      <h1>Please wait...</h1>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      request_addons,
      request_drinks,
      add_to_cart,
      remove_from_cart
    },
    dispatch
  );
};

const mapStateToProps = state => ({
  addons: state.addons_reducer.addons,
  cart: state.cart_reducer,
  drinks: state.addons_reducer.drinks
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddonsList);
