// TODO
var TodoList = props => {
  return (
    <ol>
      <li>{props.todos[0]}</li>
      <li>{props.todos[1]}</li>
      <li>{props.todos[2]}</li>
    </ol>
  );
};

var GroceryList = () => (
  <div>
    <TodoList todos={["Noodles", "Chicken", "Salt"]} />
  </div>
);

// var Noodles = () => <li>Noodles</li>;

// var Chicken = () => <li>Chicken</li>;

ReactDOM.render(<GroceryList />, document.getElementById("app"));
