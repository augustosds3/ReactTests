import * as actionTypes from '../actions';

const initialState = {
    results: []
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({
                    id: new Date(),
                    value: action.payload.result
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
