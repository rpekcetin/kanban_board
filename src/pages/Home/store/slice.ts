import { createSlice } from '@reduxjs/toolkit'
import { ICategories, ITaskCard, ITaskDeleteSlice, ITaskInitialValues, ITasksPostSlice, IUpdateMoveTaskSlice } from '../types/types'

const initialState: ITaskInitialValues = {
    tasks: [],
}

const HomeSlice = createSlice({
    name: 'tasks',
    initialState: initialState,
    reducers: {
        getTasks: (state: ITaskInitialValues, action: IUpdateMoveTaskSlice) => {
            state.tasks = action.payload
        },
        postTasks: (state: ITaskInitialValues, action: ITasksPostSlice) => {
            const categoryIndex = state.tasks.findIndex((category: ICategories) => category.id === action.payload.categoryId);
            if (categoryIndex !== -1) {
                state?.tasks[categoryIndex]?.data?.push(action?.payload);
            }
        },
        updateTasksMove: (state: ITaskInitialValues, action: IUpdateMoveTaskSlice) => {
            const updatedCategories: ICategories[] = action.payload;
            state.tasks = updatedCategories;
        },
        deleteTasks: (state: ITaskInitialValues, action: ITaskDeleteSlice) => {
            const categoryIndex = state.tasks.findIndex((category: ICategories) => category.id === action.payload.categoryId);

            if (categoryIndex !== -1) {
                if (state.tasks[categoryIndex] && state.tasks[categoryIndex].data) {
                    state.tasks[categoryIndex].data = state.tasks[categoryIndex].data.filter((el: ITaskCard) => el._id !== action.payload._id);
                }

            }
        }
    },
})
export const {
    getTasks,
    postTasks,
    updateTasksMove,
    deleteTasks
} = HomeSlice.actions
export default HomeSlice.reducer
