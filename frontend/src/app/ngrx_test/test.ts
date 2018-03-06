/*

    state

*/
const state = {
    todos: [
        { label: "Eat pizza", complete: false},
    ],
};

/*

    Actions
        - type: string, describes event
        - payload: optional data

    Dispatch actions to reducers

*/
const action = {
    type: "ADD_TODO",
    payload: {
        label: "Eat pizza",
        complete: false,
    },
};

/*

    Reducers
        - pure function

    - Responds to action.type
    - Access to action.payload
    - Composes new state
    - Returns new state

*/
function reducer(state, action) {
    switch (action.type) {
        case "ADD_TODO": {
            const todo = action.payload;
            const todos = [...state.todos, todo];
            return {
                todos,
            };
        }
    }

    return state;
}
