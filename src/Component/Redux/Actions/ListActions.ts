import axios from "axios"
import { Dispatch } from "../../../Interface/Types"
import { GET_LIST,EDIT_TASK, DELETE_TASK, ADD_NEW_TASK } from "../Action_types"

export const GetList = () => async (dispatch:(e:Dispatch)=>void) => {
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
 export const EditTask = (newTaskData:{updated:{},edititem:{id:number}}) => async (dispatch:(e:Dispatch)=>void) => {
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
            payload:res.data
         }) 
      });



   
  }

  export const DeleteTask = (id:any) => async (dispatch:(e:Dispatch)=>void) => {

    await axios
    .delete(`https://api.todoist.com/rest/v1/tasks/${id}`, {
      headers: {
        Authorization: "Bearer 1f6cf49d242e37b86b33341d94ed020799d435a4",
      },
    })
    .then((res) => {
      console.log(res.data);
      
        dispatch({
            type: DELETE_TASK,
            payload: res.data
         })
    })
    .catch((err) => console.log("err===>", err));
    
  }

  export const AddNewTask = (data:{content:string}) => async (dispatch:(e:Dispatch)=>void) => {

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
  
