import { ADD_TODO, TOGGLE_TASK } from '../Actions/index'

const initialState = {
    task: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_TODO: {
            return {
                ...state,
                task: [
                    ...state.task,
                    action.payload,
                ]
            }
        }

        case TOGGLE_TASK: {
           return {
               ...state,
               task: state.task.map((item) => item.id === action.payload ? {...item, completed: !item.completed} : item)
           }
        }
        default:
            return state
    }
}


