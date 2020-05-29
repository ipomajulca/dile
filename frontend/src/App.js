import React, {Component} from 'react';


class App extends Component {
  state = { stores: []}
  componentDidMount() {
    fetch('/stores').then(res => res.json())
    .then(stores => this.setState({stores}))
  }
  render() {
    return(
      <div>
      <h1>Stores</h1>
      <ul>{this.state.stores.map(store =>
      <li key={store._id}>{store.name}</li>
      )}</ul>
      </div>
    );
  }
}
export default App;
