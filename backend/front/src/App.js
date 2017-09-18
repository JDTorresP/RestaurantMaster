import React, {Component} from 'react';
import TwitterList from "./TwitterList.js";
import SearchBox from "./SearchBox.js";
class App extends Component {
  constructor(props) {
    super(props);
     this.state={
            tweets:[]
        };
  }
      componentDidMount () {
        fetch("/restaurants",{method:"GET",
        headers:{accept:"application/json"}})
        .then((res)=>{
          if(res.ok)
            return res.json();
        })
        .then((resta)=>{
          this.setState({
            tweets:resta
          });
        });
      }
      
  render() {
    return (
      <div>
        <h1>tweets</h1>
        <div>
          <SearchBox/>
        </div>
        <TwitterList tweets={this.state.tweets}/>
      </div>
    );
  }
}
export default App;
