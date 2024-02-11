import { PanelActionTypes } from "../store/types"

export interface INewPanelPayload {
    type: PanelActionTypes
    payload: {
        name: string
    }
}