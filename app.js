// TODO
var GroceryList = props => (
  <ul>
    <li>{props.grocery[0]}</li>
    <li>{props.grocery[1]}</li>
  </ul>
);

var App = () => (
  <div>
    <h2>My Grocery List</h2>
    <GroceryList grocery={['Apple', 'Bananas']} />
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));
