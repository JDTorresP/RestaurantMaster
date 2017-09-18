import React, {Component} from 'react';
import RestaurantList from "./RestaurantList.js";
import SearchBox from "./SearchBox.js";
class App extends Component {
  constructor(props) {
    super(props);
     this.state={
            restaurantes:[]
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
            restaurantes:resta
          });
        });
      }
      
  render() {
    return (
      <div>
        <h1>restaurants</h1>
        <div>
          <SearchBox/>
        </div>
        <RestaurantList restaurantes={this.state.restaurantes}/>
      </div>
    );
  }
}
export default App;
