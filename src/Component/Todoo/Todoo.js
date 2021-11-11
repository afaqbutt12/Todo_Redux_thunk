import React, { useState } from "react";
import { useDispatch} from 'react-redux'
import "./Style.css";
import { AddNewTask } from "../Redux/Actions/ListActions";
const Todoo = ({ toupdate }) => {
  const [taskName, setTaskName] = useState("");
const dispatch = useDispatch()
  const AddTask = async () => {
    let newTaskData = {
      content: taskName,
    };
    dispatch(AddNewTask(newTaskData));
    return toupdate();
  };

  const AddTaskHandler = async (e) => {
    e.preventDefault();

    taskName && AddTask();
    setTaskName("");
  };

  return (
    <form onSubmit={AddTaskHandler}>
      <div className="addItems">
        <input
          type="text"
          placeholder="✍ Add Items"
          value={taskName}
          className="form-control"
          onChange={(e) => setTaskName(e.target.value)}
        />
        <button className="fa fa-plus add-btn" type="submit"></button>
        </div>
        </form>
        );
        };
        
        export default Todoo;
//  {toogle ? (
//           ) : (
//           <i className="far fa-edit add-btn" onClick={AddTaskHandler}></i>
//         )}

//        </div>
//       </div> 
