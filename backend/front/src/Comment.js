import React, {Component} from "react";

class Comment extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
        <div className="text-center">
           {this.props.comment.text}
        </div>);
    }
}

export default Comment;