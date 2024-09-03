import { Provider } from "react-redux";
import "./App.css";
import { store } from "./app/store";
import { Todos, AddTodo } from "./components/index";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AddTodo />
        <Todos />
      </div>
    </Provider>
  );
}

export default App;
