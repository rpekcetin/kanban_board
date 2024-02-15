import { createSlice } from '@reduxjs/toolkit'
import { IDeletePanelPayload, IPanel, IPanelGet, IPanelInitialState, IPanelNew, IPanelUpdateLoaded } from '../types/types'

const initialState: IPanelInitialState = {
    panels: [],
    isLoaded: false
}
const PanelSlice = createSlice({
    name: 'tasks',
    initialState: initialState,
    reducers: {
        getPanels: (state: IPanelInitialState, action: IPanelGet) => {
            state.panels = action?.payload
        },
        postPanels: (state: IPanelInitialState, action: IPanelNew) => {
            state.panels = [action?.payload, ...state.panels]
        },
        deletePanels: (state: IPanelInitialState, action: IDeletePanelPayload) => {
            state.panels = [...state.panels.filter((el: IPanel) => el._id !== action?.payload?._id)]
        },
        updateLoaded: (state: IPanelInitialState, action: IPanelUpdateLoaded) => {
            state.isLoaded = action?.payload
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
