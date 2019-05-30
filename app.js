// TODO

var App = () => (
  <div>
    <h2>My Grocery List</h2>
    <GroceryList grocery={['Apple', 'Bananas', 'Oranges', 'Kiwi']} />
  </div>
);

var GroceryList = props => (
  <ul>
    {props.grocery.map(item => (
      <GroceryListItem key={item} value={item} />
    ))}
  </ul>
);

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bold: false
    };
  }

  onHoverBold() {
    this.setState({
      bold: !this.state.bold
    });
  }

  render() {
    var style = {
      fontWeight: this.state.bold ? 'bold' : 'normal'
    };
    return (
      <li
        style={style}
        onMouseEnter={this.onHoverBold.bind(this)}
        onMouseLeave={this.onHoverBold.bind(this)}
      >
        {this.props.value}
      </li>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
