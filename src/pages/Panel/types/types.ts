import { PanelActionTypes } from "../store/types"

export interface INewPanelPayload {
    type: PanelActionTypes
    payload: {
        name: string
    }
}

export interface IDeletePanelPayload {
    type: PanelActionTypes
    payload: {
        _id: string
    }
}

export interface IPanel {
    _id: string
    name: string
    created_at: Date
}

export interface IPanelInitialState {
    panels: IPanel[]
    isLoaded: boolean
}

export interface IPanelUpdateLoaded {
    payload: boolean
    type: PanelActionTypes
}

export interface IPanelNew {
    payload: IPanel
    type: PanelActionTypes
}

export interface IPanelGet {
    payload: IPanel[]
    type: PanelActionTypes
}

export interface IPanelValidation {
    name: string
}