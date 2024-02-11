import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    panels: [],
    isLoaded: false
}
const PanelSlice = createSlice({
    name: 'tasks',
    initialState: initialState,
    reducers: {
        getPanels: (state, action) => {
            state.panels = action.payload
        },
        postPanels: (state: any, action: any) => {
            state.panels = [action.payload, ...state.panels]
        },
        deletePanels: (state, action) => {
            state.panels = [...state.panels.filter((el: any) => el._id !== action.payload)]
        },
        updateLoaded: (state: any, action: {
            payload: boolean;
            type: string;
        }) => {
            state.isLoaded = action.payload
        },
    },
})
export const {
    getPanels,
    postPanels,
    deletePanels,
    updateLoaded
} = PanelSlice.actions
export default PanelSlice.reducer
