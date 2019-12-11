import * as actionTypes from './actions/actionsTypes';

const initialState = {
    counter: 0,
    results: []
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        //Object.assign({}, state);Not a deep copy, the results keep the same
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
                counter: state.counter + action.payload.value
            }

        case actionTypes.SUBTRACT:
            return {
                ...state,
                counter: state.counter - action.payload.value
            }
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({
                    id: new Date(),
                    value: state.counter
                }) //concat returns a new array
            }
        case actionTypes.DELETE_RESULT:
            /*            const newArray = [...state.results] //Deep Objects points to the same objects
                       newArray.splice(2,1) */
            const newArray = state.results.filter((element) => {
                return element.id !== action.payload.removeId
            });

            return {
                ...state,
                results: newArray
            }
    }

    return state;
}


export default reducer;
