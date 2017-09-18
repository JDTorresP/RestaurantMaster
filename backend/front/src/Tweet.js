import React, { Component } from 'react';
import PropTypes from "prop-types";

class Tweet extends Component{
    constructor(props) {
        super(props);
    }
      
    render() {
      return (
        <div>
          <div className="name">{this.props.tweet.name}</div>
          <div className="address">{this.props.tweet.address}</div>
          <div className="product">{this.props.tweet.product}</div>
          <div className="prodDescrip">{this.props.tweet.prodDescrip}</div>
          <img src={this.props.tweet.photo} alt="restaurant picture"/>
        </div>
      )
    }
}
  Tweet.propTypes = {
    tweet: PropTypes.object.isRequired
  }
  
export default Tweet;