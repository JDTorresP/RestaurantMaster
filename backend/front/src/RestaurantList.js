import React, { Component } from 'react';
import Restaurante from "./Restaurante.js"
import PropTypes from "prop-types";

class RestaurantList extends Component{
    constructor(props) {
        super(props);
    }
    renderRestaurants()
    {
       return this.props.restaurantes.map((t,i)=>{
            return <Restaurante restaurante = {t} key={i}/>
        });
    }
    render() {
      return (
        <div>
          {this.props.restaurantes ? this.renderRestaurants():"no hay restaurantes"}
        </div>
      )
    }
}

RestaurantList.propTypes = {
    restaurantes: PropTypes.array.isRequired
  }
  
export default RestaurantList;
