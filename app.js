// TODO

var App = () => (
  <div>
    <h2>My Grocery List</h2>
    <GroceryList grocery={['Apple', 'Bananas', 'Oranges', 'Kiwi']} />
  </div>
);

var GroceryList = props => {
  var groceries = props.grocery;

  var groceryItems = groceries.map(item => (
    <GroceryListItem key={item} value={item} />
  ));
  return <ul>{groceryItems}</ul>;
};

var GroceryListItem = props => <li>{props.value}</li>;

ReactDOM.render(<App />, document.getElementById('app'));
