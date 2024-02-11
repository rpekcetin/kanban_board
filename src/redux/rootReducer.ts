import { combineReducers } from 'redux'
import HomeSlice from '../pages/Home/store/slice'
import PanelSlice from '../pages/Panel/store/slice'

const rootReducer = combineReducers({
    HomeSlice,
    PanelSlice,
})

export default rootReducer