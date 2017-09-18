import React, {Component} from "react";
import PropTypes from "prop-types";
import CommentsList from "./CommentsList.js";

class Restaurant extends Component{
    constructor(props){
        super(props);
        this.state ={
            comments:[{}, {}, {}, {}]
        };
    }

    render(){
        return(
        <div className="col-md-6 col-lg-4 my-1 text-center">
            <img src={this.props.restaurants.photo} alt="restaurant picture"/>
            
            <p>descripcion rest</p>
            <p>Rate: 1-10</p>
            <a data-toggle="comments" href="#comments" aria-expanded="false" aria-controls="collapseExample">View comments</a>
            <div className="collapse" id="collapseExample">
                <div className="card card-body">
                    <CommentsList comments={this.state.comments}/>
                </div>
            </div>
        </div>);
    }
}

Restaurant.PropTypes = {
    restaurant: PropTypes.object.isRequired
}


export default Restaurant;