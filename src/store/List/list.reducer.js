export default (state = [], action) => {
    switch (action.type) {
        case 'SUMLIST':
            return [...state, action.payload]

        case 'SUBTRACTLIST':
            return state.filter(e => e.key != action.payload)

        default:
            return state;
    }
}