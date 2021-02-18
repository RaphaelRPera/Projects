export default function msgReducer(state = [], action) {
    switch (action.type) {
        case 'MSG': return action.payload
        default: return state
    }
}