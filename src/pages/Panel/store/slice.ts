import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    panels: [
    ],
}
const PanelSlice = createSlice({
    name: 'tasks',
    initialState: initialState,
    reducers: {
        getPanels: (state, action) => {
            state.panels = action.payload
        },
        postPanels: (state: any, action: any) => {
            state.panels = [...action.payload, ...state.panels]
        },
        deletePanels: (state, action) => {
            state.panels = [...state.panels.filter((el: any) => el.id !== action.payload)]
        }
    },
})
export const {
    getPanels,
    postPanels,
    deletePanels
} = PanelSlice.actions
export default PanelSlice.reducer
