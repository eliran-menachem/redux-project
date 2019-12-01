import * as actionTypes from './action';

const initialState = {
    counter: 0,
    results: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT:
            return {
                ...state,
                counter: state.counter + 1
            }
        case actionTypes.DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            }
        case actionTypes.ADD:
            return {
                ...state,
                counter: state.counter + action.val
            }
        case actionTypes.SUBTRACT:
            return {
                ...state,
                counter: state.counter - action.val
            }
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({ id: new Date(), value: state.counter })
            }
        case actionTypes.DELETE_RESULT:
            const updatedArray = state.results.filter((result) => {
                return (
                    result.id !== action.resultElId
                )

            })
            return {
                ...state,
                results: updatedArray
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