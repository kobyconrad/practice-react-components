// TODO
var GroceryList = () => (
  <div>
    <ul>
      <Noodles />
      <Chicken />
    </ul>
  </div>
);

var Noodles = () => <li>Noodles</li>;

var Chicken = () => <li>Chicken</li>;

ReactDOM.render(<GroceryList />, document.getElementById("app"));
