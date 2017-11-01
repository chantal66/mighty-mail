import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Payments extends Component {
  render() {
    return (
      <StripeCheckout
        name="Mighty Mail"
        description="$5 for 5 email credits"
        amount={500} // amount goes by cents 500 cents = 5 dollars
        token={token => this.props.handleToken(token)} // sent by stripe
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <button className="btn light-blue darken-2">Add Credits</button>
      </StripeCheckout>
    );
  }
}

export default connect(null, actions)(Payments);
