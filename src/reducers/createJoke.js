import {  POST_JOKE } from '../actions/index'
export default function (state = [], action = {}) {
    switch (action.type) {

        case POST_JOKE:
            console.log("joke from reducers: ", action.payload)
            return [state, {...action.payload}]
        default:
            return state
    }
}