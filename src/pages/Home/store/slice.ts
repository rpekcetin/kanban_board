import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    tasks: [],
}
const HomeSlice = createSlice({
    name: 'tasks',
    initialState: initialState,
    reducers: {
        getTasks: (state, action) => {
            state.tasks = action.payload
        },
        // addCurrentAccount: (state, action) => {
        //     state.currentAccounts.push(action.payload)
        // },
        // updateCurrentAccount: (state, action) => {
        //     const updateIndex = state.currentAccounts.findIndex(
        //         (el) => el.id === action.payload.id
        //     )
        //     state.currentAccounts[updateIndex] = action.payload
        // },
        // deleteCurrentAccount: (state, action) => {
        //     state.currentAccounts = state.currentAccounts.filter(
        //         (el) => el.id !== action.payload
        //     )
        // },
    },
})
export const {
    getTasks
    // showCurrentAccount,
    // addCurrentAccount,
    // updateCurrentAccount,
    // deleteCurrentAccount,
} = HomeSlice.actions
export default HomeSlice.reducer
