const initialState = {
    counter: 0,
    results: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                counter: state.counter + 1
            }
        case 'DECREMENT':
            return {
                ...state,
                counter: state.counter - 1
            }
        case 'ADD':
            return {
                ...state,
                counter: state.counter + action.val
            }
        case 'SUBTRACT':
            return {
                ...state,
                counter: state.counter - action.val
            }
        case 'STORE_RESULT':
            return {
                ...state,
                results: state.results.concat({  id: new Date(), value: state.counter})
            }
        case 'DELETE_RESULT':
            return {
                ...state,
                results: state.results.concat(state.counter)
            }
    }

    // if (action.type === 'INCREMENT') {
    //     return {
    //         ...state,
    //         counter: state.counter + 1
    //     }
    // }
    // if (action.type === 'DECREMENT') {
    //     return {
    //         ...state,
    //         counter: state.counter - 1
    //     }
    // }
    // if (action.type === 'ADD') {
    //     return {
    //         ...state,
    //         counter: state.counter + action.val
    //     }
    // }
    // if (action.type === 'SUBTRACT') {
    //     return {
    //         ...state,
    //         counter: state.counter - action.val
    //     }
    // }
    return state;
};

export default reducer;