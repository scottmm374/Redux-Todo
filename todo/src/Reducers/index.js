import { ADD_TODO } from '../Actions/index';

const initialState = {
    task: []
}

export default function (state=initialState, action) {
    switch (action.type) {
        case ADD_TODO : {
            const newTask = state.task;

        }

        return {
            ...state,
            task: newTask
        }
        default:
            return state

    }
}