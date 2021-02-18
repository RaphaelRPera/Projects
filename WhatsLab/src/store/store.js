import { configureStore } from '@reduxjs/toolkit'
import darkModeReducer from './DarkMode/DarkMode.reducer'
import msgReducer from './Message/Message.reducer'


const store = configureStore({
    reducer: {
        messages: msgReducer,
        darkMode: darkModeReducer
    }
})

export default store
