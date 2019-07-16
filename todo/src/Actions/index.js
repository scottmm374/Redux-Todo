export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TASK = 'TOGGLE_TASK';

let nextToDo = 0;
export function addTodo(task) {
    return {
        type: ADD_TODO,
        payload: {
            id: nextToDo++,
            task
        }

    }
}

export function toggleTask (id) {
    return {
        type: TOGGLE_TASK,
        id
    }
}

