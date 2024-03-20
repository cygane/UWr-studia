import "./styles.css";
import Task from "./components/Task";
import InputwithButton from "./components/InputwithButton";
import Sorter from "./components/Sorter";
import ItemsperPage from "./components/ItemsperPage";
import { useState, FormEvent } from "react";

const initialTasks = [
  { id: 1, taskname: "do second lab (React)", done: true },
  { id: 2, taskname: "do the groceries", done: false },
  { id: 3, taskname: "call mum", done: false },
  { id: 4, taskname: "buy ticket to go back home", done: false },
];

export default function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [input, setInput] = useState("");
  const [search, setSearch] = useState("");
  const [newTask, setNewTask] = useState("");
  const [filterDone, setFilterDone] = useState(false);
  const [sortMode, setSortMode] = useState("default");
  const [itemsperpage, setItemsPerPage] = useState(1);
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(tasks.length / itemsperpage);

  function handleDeleteTask(id: number): void {
    const newTasks = tasks.filter(task => task.id !== id);
    setTasks(newTasks);
  }

  function handleSearchSubmit(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    setSearch(input);
  }

  function handleAddTaskSubmit(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    if (newTask !== "") {
      const newId = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1;
      setTasks([...tasks, { id: newId, taskname: newTask, done: false }]);
      setNewTask("");
    }
  }

  return (
    <>
      <h1 className="header">ToDo List</h1>
      <InputwithButton
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onSubmit={handleSearchSubmit}
        buttonText="Search"
      />
      <InputwithButton
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        onSubmit={handleAddTaskSubmit}
        buttonText="Add Task"
      />
      <button
        className="show-button"
        onClick={() => setFilterDone(!filterDone)}
      >
        {filterDone ? "Show All Tasks" : "Show Only Done Tasks"}
      </button>
      <div className="sorter-items">
        <Sorter
            sorttype={sortMode}
            onChange={(newSortMode) => {
              if (newSortMode !== sortMode) {
                setSortMode(newSortMode);
              }
            }}
          />
          <ItemsperPage
            howmany={itemsperpage}
            onChange={(newitemsperpage) =>{
              if (newitemsperpage !== itemsperpage && newitemsperpage > 0) {
                setItemsPerPage(newitemsperpage);
                setPage(1);
              }
            }}
          />
        </div>
      <main>
        {tasks
          .filter((task) => task.taskname.includes(search))
          .sort((task1, task2) => {
            if (sortMode == "asc") return task1.taskname > task2.taskname ? 1 : -1;
            else if (sortMode == "desc") return task1.taskname < task2.taskname ? 1 : -1;
            return 0;
          })
          .filter((task) => (filterDone ? task.done : true))
          .slice((page - 1) * itemsperpage, page * itemsperpage)
          .map((task) => (
            <Task
              key={task.id}
              id={task.id}
              taskname={task.taskname}
              done={task.done}
              onTap={() => {
                const newTasks = tasks.map(t =>
                  t.id === task.id ? { ...t, done: !t.done } : t
                );
                setTasks(newTasks);
              }}
              onDelete={() => {
                handleDeleteTask(task.id);
              }}
            />
          ))}
      </main>
      <div className="page-container">
        <button  className="previous-button" disabled={page === 1} onClick={() => setPage(page - 1)}>Previous</button>
        <span className="page-span"> Page {page} of {totalPages} </span>
        <button className="next-button" disabled={page === totalPages} onClick={() => setPage(page + 1)}>Next</button>
      </div>
    </>
  );
}
