import { ADD_NEW_TASK, DELETE_TASK, EDIT_TASK, GET_LIST } from "../Action_types";

const initialState = {
    data: [],
    loading:false
    
  };
  
  export const GetListReducer = (State = initialState, action:any) => {
    const { type, payload } = action;
  
    switch (type) {
      case GET_LIST:
        return {
          ...State,
          data: payload,
          loading:true
        };

        case EDIT_TASK:
        return {
          ...State,
          data: payload,
        };

        case DELETE_TASK:
        return {
          ...State,
          data: payload,
        };

        case ADD_NEW_TASK:
        return {
          ...State,
          data: payload,
        };
      
      default:
        return State;
    }
  };
  