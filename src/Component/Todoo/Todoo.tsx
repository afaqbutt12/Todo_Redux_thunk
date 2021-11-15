import React from "react";
import { useDispatch} from 'react-redux'
import "./Style.css";
import { AddNewTask } from "../Redux/Actions/ListActions";
const Todoo = (): JSX.Element => {
  const [taskName, setTaskName] = React.useState<string>('');
const dispatch = useDispatch()
  const AddTask = async () => {
    let newTaskData = {
      content: taskName,
    };

    if( newTaskData){

      dispatch(AddNewTask(newTaskData));
    }
  };

  const AddTaskHandler = async (e:{preventDefault:()=>void}) => {
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
          onChange={(e:{target:{value:string}}) => setTaskName(e.target.value)}
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
