import { ADD_TODO } from '../Actions/index'

const initialState = {
    task: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_TODO: {
            return {
                ...state,
                task: action.payload.task,
                id: action.payload.id,
                completed: false
            }

        }

        default:
            return state

    }

}

