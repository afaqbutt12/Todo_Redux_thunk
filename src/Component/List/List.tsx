import { useDispatch, useSelector } from 'react-redux'
import  { useEffect} from "react";
import { DeleteTask, EditTask, GetList } from "../Redux/Actions/ListActions";
import {  MainData, Datatype } from '../../Interface/Types';


const List = (): JSX.Element => {

const dispatch = useDispatch()

const ListData=useSelector((state:Datatype)=>state.GetListReducer.data)

  useEffect(() => {
    const mydata = async () => {
      dispatch(GetList());
    };
    mydata();
  }, [ListData,dispatch]);

  const del = async (id:number) => {
    
    dispatch(DeleteTask(id)); 
  };

  const edit = async (index:number) => {
    let edititem = ListData.find((element:{id:number,content:string}) => {
      return element.id === index;
    });
    
    if(edititem) {
      let abc = prompt("Please enter your name", edititem.content);
      
      let newTaskData = {
        updated: { content: abc },
        edititem,
      };
      dispatch(EditTask(newTaskData));
     
    }
  };

  return (
    <>
      <div className="showItem text-white">
        {ListData.length>0?ListData?.map((items:MainData) => {
          return (
            <div className="eachItem" key={items.id}>
              <h1>{items.content}</h1>
              <div className="todo-btn">
                <i
                  className="far fa-edit add-btn"
                  onClick={() => edit(items.id)}
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                ></i>
                <i
                  className="far fa-trash-alt add-btn"
                  onClick={() => del(items.id)}
                ></i>
              </div>
            </div>
          );
        }):<div className="eachItem center" > <h1 className="center">Loading</h1> </div>}
      </div>
    </>
  );
};

export default List;
