export const ADD_TODO = 'ADD_TODO';

export function addTodo (task) {
    return {
        type: ADD_TODO,
            payload: {
                task,
            }
    }
}