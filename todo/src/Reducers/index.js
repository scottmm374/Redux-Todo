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

        case TOGGLE_TASK: {
            console.log('taskDone', state)
                return state.map(task => {
                  if (task.id === action.payload.id) {
                      return Object.assign ({}, task, { completed: !task.completed });
                  }
                    return task;
                });
            }
        default:
            return state
    }
}


