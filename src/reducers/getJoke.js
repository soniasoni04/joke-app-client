import { GET_JOKE } from '../actions/index'
export default function (state = [], action = {}) {
    switch (action.type) {
        case GET_JOKE:
            console.log("joke from reducers: ", action.payload)
            return action.payload

        default:
            return state
    }
}