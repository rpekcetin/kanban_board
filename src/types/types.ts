import { ICategories } from "../pages/Home/types/types"
import { IPanel } from "../pages/Panel/types/types"

export interface ISelectorType {
    HomeSlice: {
        tasks: ICategories[],
        isLoaded: boolean
    }
    PanelSlice: {
        panels: IPanel[],
        isLoaded: boolean
    }
}