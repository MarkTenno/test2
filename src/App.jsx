// import TodoList from "./components/todoList";

import Search from "./components/Search"
import TodoList from "./components/TodoList"

const App = () => {
  return (
    <div className="todo">
      <h1 className="todo__title">To Do List</h1>
      <form className="todo__form">
        <div className="todo__field field">
          <label
            className="field__label"
            htmlFor="new-task"
          >
            New task
          </label>
          <input
            className="field__input"
            id="new-task"
            placeholder=" "
            autoComplete="off"
          />
        </div>
        <button className="button" type="submit">Add</button>
      </form>
      <Search />
      <Search />
      <Search />
      <div className="todo__info">
        <div className="todo__total-tasks">Total tasks: <span>0</span></div>
        <button className="todo__delete-all-button" type="button">Delete all</button>
      </div>
      <TodoList />
      <div className="todo__empty-message"></div>
    </div>
  )
}

export default App
