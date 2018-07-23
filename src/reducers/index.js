import { combineReducers } from 'redux'
import todoReducer from '@/components/Todo/todoReducer'
import todoFilterReducer from '@/components/Todo/todoFilterReducer'
import questionsReducer from '@/components/Questions/questionsReducer'

export default combineReducers({
    todoReducer,
    todoFilterReducer,
    questionsReducer
})