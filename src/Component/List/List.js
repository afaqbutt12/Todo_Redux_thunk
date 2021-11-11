import { useDispatch, useSelector } from 'react-redux'
import React, { useEffect, useState } from "react";
import { DeleteTask, EditTask, GetList } from "../Redux/Actions/ListActions";


const List = ({ toupdate }) => {
const [loading, setLoading] = useState(false)

  const dispatch = useDispatch()

const ListData=useSelector((state)=>state.GetListReducer)


  useEffect(() => {
    const mydata = async () => {
      dispatch(GetList());
    };
    mydata();
  }, [toupdate]);

  const del = async (id) => {
    dispatch(DeleteTask(id));
    return toupdate();
  };

  const edit = async (index) => {
    let edititem = ListData.find((element) => {
      return element.id === index;
    });
    let abc = prompt("Please enter your name", edititem.content);

    let newTaskData = {
      updated: { content: abc },
      edititem,
    };
    dispatch(EditTask(newTaskData));
    return toupdate();
  };

  return (
    <>
      <div className="showItem text-white">
        {ListData.data.length>0?ListData.data?.map((items) => {
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
