import { FaBuffer } from "react-icons/fa";
import "./header.css";

export default function Header() {
  return (
      <header>
        <div className="Logo">
          <FaBuffer />
          <h2>To do List</h2>
        </div>
        <div className="MoreOptions">
          <div className="ChangeColorBtn">ChangeColor</div>
          <div className="config">Config</div>
          <div className="UserBtn">UserImg</div>
        </div>
      </header>
  );
}
