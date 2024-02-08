import { combineReducers } from 'redux'
import HomeSlice from '../pages/Home/store/slice'

const rootReducer = combineReducers({
    HomeSlice,
})

export default rootReducer