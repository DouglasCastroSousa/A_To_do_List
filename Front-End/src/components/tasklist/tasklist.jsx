import "./tasklist.css";
import { FaCalendarDay, FaGamepad, FaReact } from "react-icons/fa";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { CgGym } from "react-icons/cg";
import { MdSportsGymnastics } from "react-icons/md";
import { IoFastFood, IoSchoolSharp } from "react-icons/io5";
import { TiPencil } from "react-icons/ti";

export default function TaskList() {
  return (
    <div className="TaskListDiv">
      <div className="TaskListBox">
        <div className="Task">
          <div className="TaskIconTitle">
            <FaCalendarDay />
            <h3>TaskName</h3>
            <div className="ChangeIconTitle">
              <TiPencil />
            </div>
          </div>

          <hr />

          <textarea
            name="taskdescription"
            id="taskdescription"
            placeholder="Task Description here, you can write anything"
          ></textarea>
          <button className="TaskBtn">Salvar</button>
        </div>
        <div className="Task">2</div>
        <div className="Task">3</div>
        <div className="Task">4</div>
        <div className="Task">5</div>
        <div className="Task">6</div>
        <div className="Task">7</div>
        <div className="Task">8</div>
        <div className="Task">9</div>
        <div className="Task">10</div>
        <div className="Task">10</div>
        <div className="Task">10</div>
      </div>
    </div>
  );
}
