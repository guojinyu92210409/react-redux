import { combineReducers } from 'redux'
import todoReducer from '@/components/Todo/todoReducer'
import todoFilterReducer from '@/components/Todo/todoFilterReducer'

export default combineReducers({
    todoReducer,
    todoFilterReducer
})