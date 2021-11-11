import axios from "axios"
import { GET_LIST,EDIT_TASK, DELETE_TASK, ADD_NEW_TASK } from "../Action_types"

export const GetList = () => async dispatch => {
    await axios.get("https://api.todoist.com/rest/v1/tasks", {
    headers: {
      Authorization: "Bearer 1f6cf49d242e37b86b33341d94ed020799d435a4",
    },
  }).then((res)=>{
   dispatch({
       type: GET_LIST,
       payload:res.data
    }) }).catch( err =>{
        
    })
 }
 export const EditTask = (newTaskData) => async dispatch => {
    await axios.post(
        `https://api.todoist.com/rest/v1/tasks/${newTaskData.edititem.id}`,
        newTaskData.updated,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer 1f6cf49d242e37b86b33341d94ed020799d435a4",
          },
        }
      ).then((res)=>{
        dispatch({
            type: EDIT_TASK,
            payload:res
         }) 
      });



   
  }

  export const DeleteTask = (id) => async dispatch => {

    await axios
    .delete(`https://api.todoist.com/rest/v1/tasks/${id}`, {
      headers: {
        Authorization: "Bearer 1f6cf49d242e37b86b33341d94ed020799d435a4",
      },
    })
    .then((response) => {
        dispatch({
            type: DELETE_TASK,
            payload:response
         })
    })
    .catch((err) => console.log("err", err.message));
    
  }

  export const AddNewTask = (data) => async dispatch => {

    await axios.post("https://api.todoist.com/rest/v1/tasks", data, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer 1f6cf49d242e37b86b33341d94ed020799d435a4",
    },
  }).then((res)=>{

      dispatch({
          type: ADD_NEW_TASK,
          payload:res
       }) 
  })
  }
  
