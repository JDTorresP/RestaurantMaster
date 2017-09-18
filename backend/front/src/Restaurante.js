import React, { Component } from 'react';
import PropTypes from "prop-types";

class Restaurante extends Component{
    constructor(props) {
        super(props);
    }
      
    render() {
      return (
        <div>
          <div className="name">{this.props.restaurante.name}</div>
          <div className="address">{this.props.restaurante.address}</div>
          <div className="product">{this.props.restaurante.product}</div>
          <div className="prodDescrip">{this.props.restaurante.prodDescrip}</div>
          <img src={this.props.restaurante.photo} alt="restaurant picture"/>
        </div>
      )
    }
}
  Restaurante.propTypes = {
    restaurante: PropTypes.object.isRequired
  }
  
export default Restaurante;