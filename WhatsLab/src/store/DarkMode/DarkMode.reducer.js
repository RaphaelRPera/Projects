export default function darkModeReducer(state = false, action) {
    switch (action.type) {
        case 'DARK': return action.payload
        default: return state
    }
}