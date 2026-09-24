import "./tasklist.css";
import Task from "./task/task"

export default function TaskList() {

  return (
    <div className="TaskListDiv">
      <div className="TaskListBoxone">
        <div id="TaskListStart">
          <div id="Title">Crie aqui suas atividades para o dia a dia!</div>
          <div id="CreateTask">
            <button>Create Task</button>
          </div>
        </div>

        <div className="TaskListBox">
          <Task />
          <Task />
          <Task />
          <Task />

        </div>
      </div>
    </div>
  );
}
