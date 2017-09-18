import React, {Component} from "react";
import PropTypes from "prop-types";
import CommentsList from "./CommentsList.js";

class Restaurant extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: [],
            value:0
        };
    }
    refrescar() {
        this.setState({
            comments:this.props.restaurant.comments
        }) 
    }

     componentDidMount(){
    
        var quer= "/restaurant/"+this.props.restaurant.id+"/votes";
        console.log(quer);
        
    }
    render() {
        return (
            <div className="col-md-6 my-1 text-center" onLoad = {this.refrescar()}>
                <img src={this.props.restaurant.photo} alt="restaurant picture"/>
                <div className="name">{this.props.restaurant.name}</div>
                <div className="address">{this.props.restaurant.address}</div>
                <div className="product">{this.props.restaurant.product}</div>
                <div className="prodDescrip">{this.props.restaurant.prodDescrip}</div>
                <p>{this.props.value}</p>
                <div>
                    <div className="card card-body">
                        <CommentsList comments={this.state.comments}/>
                    </div>
                </div>
            </div>
        );
    }
}

Restaurant.PropTypes = {
    restaurant: PropTypes.object.isRequired
}

export default Restaurant;