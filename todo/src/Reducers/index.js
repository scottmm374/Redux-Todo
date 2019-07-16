import { ADD_TODO, TOGGLE_TASK } from '../Actions/index'

const initialState = {
    task: []
}

export default function (state = initialState, action) {
    console.log("reducer", state, action)
    switch (action.type) {
        case ADD_TODO: {
            return {
                ...state,
                task: state.task.concat(action.payload.task),
                id: action.payload.id,
                completed: false
            }
        }
        default:
            return state
    }
}

// case 'TOGGLE_TASK':
        //         return state.map(task =>
        //             (task.id === action.id)
        //             ? {...task, completed: !task.completed} : task
        //             )