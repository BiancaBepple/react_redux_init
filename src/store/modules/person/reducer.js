export default function person(state = [], action){
    switch (action.type) {
        case '@person/ADD':
            return [...state, action.person];
        default:
            return state;
    }
}