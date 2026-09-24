import "./task.css"
import { FaCalendarDay, FaGamepad, FaReact } from "react-icons/fa";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { CgGym } from "react-icons/cg";
import { MdSportsGymnastics } from "react-icons/md";
import { IoFastFood, IoSchoolSharp } from "react-icons/io5";
import { TiPencil } from "react-icons/ti";
import { useState } from "react";

export default function Task() {
  const [description, setDescription] = useState("");

  function SaveDescription() {
    //mandar a descrição para o banco de dados
  }

  return (
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
        onChange={(e)=>{
          setDescription(e.target.value)
          console.log({description})
        }}
      >
      </textarea>
      <button className="TaskBtn" onClick={SaveDescription}>
        Salvar
      </button>
    </div>
  );
}
