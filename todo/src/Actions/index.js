export const ADD_TODO = 'ADD_TODO';

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

