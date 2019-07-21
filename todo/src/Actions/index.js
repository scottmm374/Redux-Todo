export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TASK = 'TOGGLE_TASK';

// let nextToDo = 0;
export function addTodo(task) {
    return {
        type: ADD_TODO,
        payload: task

    }
}

export function toggleTask (id) {
    console.log("id", id)
    return {
        type: TOGGLE_TASK,
        payload: id
    }
}

