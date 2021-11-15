import { createStore,applyMiddleware, combineReducers } from 'redux'
import { GetListReducer } from './Reducer/ListReducer'
import thunk from 'redux-thunk'


const rootReducer = combineReducers({
    GetListReducer,
   
})

const store = createStore(
   rootReducer,
   {},
   applyMiddleware(thunk)
  
)

export default store