import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import TodoList from '../todo-list/todo-list';
import ItemStatusFilter from '../item-status-filter/Item-status-filter';



const App = () => {

  const todoData = [
    {lable: 'Drink Coffee', important: false, id: 1},
    {lable: 'Make Awesome App', important: true, id: 2},
    {lable: 'Have a lunch', important: false, id: 3},
  ]

  return(
    <div className="todo-app">
      <AppHeader toDo={1} done={3} />
      <div className="top-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter />
      </div>

      <TodoList todos={todoData} />
    </div>
  );
};

export default App;