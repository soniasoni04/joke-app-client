import { combineReducers } from 'redux'
import jokelist from './getJoke'
import createJoke from './createJoke'

export default combineReducers({
    jokelist,
    createJoke
    
})