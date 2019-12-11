import * as actions from '../actions'

const intialState = {
    persons: []
}

const reducer = (state = intialState, action) => {

    switch (action.type) {
        case actions.ADD_PERSON:
            const newPerson = {
                id: Math.random(), // not really unique but good enough here!
                name: action.payload.name,
                age: action.payload.age
            }
            console.log(state.persons)
            return {
                ...state,
                persons: state.persons.concat(newPerson)
            };
        case actions.DELETE_PERSON:
                const filteredPersons =  state.persons.filter(person => person.id !== action.payload.personId);
            return {
                ...state,
                persons: filteredPersons
            }

    }

    return state;
}

export default reducer;