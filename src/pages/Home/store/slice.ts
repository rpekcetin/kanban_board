import { createSlice } from '@reduxjs/toolkit'
import moment from 'moment'

const initialState = {
    tasks: [
        {
            id: 1,
            name: 'Open',
            data: [
                {
                    categoryId: 1,
                    id: 12,
                    title: 'Resmi',
                    image: 'resim3.jpg',
                    mission: 'Blah Blah',
                    status: [2],
                    startDate: moment(new Date()).format('DD.MM.YYYY'),
                    endDate: moment(new Date()).format('DD.MM.YYYY'),
                    worker: {
                        id: 1,
                        name: 'Ahmet',
                        image: 'Test.jpg'
                    },
                    position: 1,
                },
                {
                    categoryId: 1,
                    id: 13,
                    title: 'Resmi',
                    image: 'resim.jpg',
                    mission: 'Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah',
                    status: [2],
                    startDate: moment(new Date()).format('DD.MM.YYYY'),
                    endDate: moment(new Date()).format('DD.MM.YYYY'),
                    worker: {
                        id: 1,
                        name: 'Ahmet',
                        image: 'Test.jpg'
                    },
                    position: 2,
                }, {
                    categoryId: 1,
                    id: 14,
                    title: 'Resmi',
                    position: 3,
                    image: 'resim2.jpg',
                    mission: 'Blah Blah',
                    status: [2],
                    startDate: moment(new Date()).format('DD.MM.YYYY'),
                    endDate: moment(new Date()).format('DD.MM.YYYY'),
                    worker: {
                        id: 1,
                        name: 'Ahmet',
                        image: 'Test.jpg'
                    }
                }, {
                    categoryId: 1,
                    id: 15,
                    position: 4,
                    title: 'Resmi',
                    image: 'resim2.jpg',
                    mission: 'Blah Blah',
                    status: [2],
                    startDate: moment(new Date()).format('DD.MM.YYYY'),
                    endDate: moment(new Date()).format('DD.MM.YYYY'),
                    worker: {
                        id: 1,
                        name: 'Ahmet',
                        image: 'Test.jpg'
                    }
                }
            ],
        },
        {
            id: 2,
            name: 'In Progress',
            data: [
                {
                    categoryId: 2,
                    id: 16,
                    position: 1,
                    title: 'Resmi',
                    image: 'resim3.jpg',
                    mission: 'Blah Blah',
                    status: [2],
                    startDate: moment(new Date()).format('DD.MM.YYYY'),
                    endDate: moment(new Date()).format('DD.MM.YYYY'),
                    worker: {
                        id: 1,
                        name: 'Ahmet',
                        image: 'Test.jpg'
                    }
                },
                {
                    categoryId: 2,
                    id: 17,
                    position: 2,
                    title: 'Resmi',
                    image: 'resim.jpg',
                    mission: 'Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah',
                    status: [2],
                    startDate: moment(new Date()).format('DD.MM.YYYY'),
                    endDate: moment(new Date()).format('DD.MM.YYYY'),
                    worker: {
                        id: 1,
                        name: 'Ahmet',
                        image: 'Test.jpg'
                    }
                }, {
                    categoryId: 2,
                    id: 18,
                    position: 3,
                    title: 'Resmi',
                    image: 'resim2.jpg',
                    mission: 'Blah Blah',
                    status: [2],
                    startDate: moment(new Date()).format('DD.MM.YYYY'),
                    endDate: moment(new Date()).format('DD.MM.YYYY'),
                    worker: {
                        id: 1,
                        name: 'Ahmet',
                        image: 'Test.jpg'
                    }
                }, {
                    categoryId: 2,
                    id: 19,
                    position: 4,
                    title: 'Resmi',
                    image: 'resim2.jpg',
                    mission: 'Blah Blah',
                    status: [2],
                    startDate: moment(new Date()).format('DD.MM.YYYY'),
                    endDate: moment(new Date()).format('DD.MM.YYYY'),
                    worker: {
                        id: 1,
                        name: 'Ahmet',
                        image: 'Test.jpg'
                    }
                }
            ],
        },
        {
            id: 3,
            name: 'Complate',
            data: [
                {
                    categoryId: 3,
                    id: 21,
                    position: 1,
                    title: 'Resmi',
                    image: 'resim3.jpg',
                    mission: 'Blah Blah',
                    status: [3],
                    startDate: moment(new Date()).format('DD.MM.YYYY'),
                    endDate: moment(new Date()).format('DD.MM.YYYY'),
                    worker: {
                        id: 1,
                        name: 'Ahmet',
                        image: 'Test.jpg'
                    }
                },
                {
                    categoryId: 3,
                    id: 22,
                    position: 2,
                    title: 'Resmi',
                    image: 'resim.jpg',
                    mission: 'Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah',
                    status: [1],
                    startDate: moment(new Date()).format('DD.MM.YYYY'),
                    endDate: moment(new Date()).format('DD.MM.YYYY'),
                    worker: {
                        id: 1,
                        name: 'Ahmet',
                        image: 'Test.jpg'
                    }
                }, {
                    categoryId: 3,
                    id: 23,
                    position: 3,
                    title: 'Resmi',
                    image: 'resim2.jpg',
                    mission: 'Blah Blah',
                    status: [2],
                    startDate: moment(new Date()).format('DD.MM.YYYY'),
                    endDate: moment(new Date()).format('DD.MM.YYYY'),
                    worker: {
                        id: 1,
                        name: 'Ahmet',
                        image: 'Test.jpg'
                    }
                }, {
                    categoryId: 3,
                    id: 24,
                    position: 4,
                    title: 'Resmi',
                    image: 'resim2.jpg',
                    mission: 'Blah Blah',
                    status: [2],
                    startDate: moment(new Date()).format('DD.MM.YYYY'),
                    endDate: moment(new Date()).format('DD.MM.YYYY'),
                    worker: {
                        id: 1,
                        name: 'Ahmet',
                        image: 'Test.jpg'
                    }
                }
            ],
        },
        {
            id: 4,
            name: 'Done',
            data: [
                {
                    categoryId: 4,
                    id: 25,
                    position: 1,
                    title: 'Resmi',
                    image: 'resim3.jpg',
                    mission: 'Blah Blah',
                    status: [2],
                    startDate: moment(new Date()).format('DD.MM.YYYY'),
                    endDate: moment(new Date()).format('DD.MM.YYYY'),
                    worker: {
                        id: 1,
                        name: 'Ahmet',
                        image: 'Test.jpg'
                    }
                },
                {
                    categoryId: 4,
                    id: 26,
                    position: 2,
                    title: 'Resmi',
                    image: 'resim.jpg',
                    mission: 'Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah',
                    status: [2],
                    startDate: moment(new Date()).format('DD.MM.YYYY'),
                    endDate: moment(new Date()).format('DD.MM.YYYY'),
                    worker: {
                        id: 1,
                        name: 'Ahmet',
                        image: 'Test.jpg'
                    }
                }, {
                    categoryId: 4,
                    id: 27,
                    position: 3,
                    title: 'Resmi',
                    image: 'resim2.jpg',
                    mission: 'Blah Blah',
                    status: [2],
                    startDate: moment(new Date()).format('DD.MM.YYYY'),
                    endDate: moment(new Date()).format('DD.MM.YYYY'),
                    worker: {
                        id: 1,
                        name: 'Ahmet',
                        image: 'Test.jpg'
                    }
                }, {
                    categoryId: 4,
                    id: 28,
                    position: 4,
                    title: 'Resmi',
                    image: 'resim2.jpg',
                    mission: 'Blah Blah',
                    status: [2],
                    startDate: moment(new Date()).format('DD.MM.YYYY'),
                    endDate: moment(new Date()).format('DD.MM.YYYY'),
                    worker: {
                        id: 1,
                        name: 'Ahmet',
                        image: 'Test.jpg'
                    }
                }
            ],
        }
    ],
}
const HomeSlice = createSlice({
    name: 'tasks',
    initialState: initialState,
    reducers: {
        getTasks: (state, action) => {
            state.tasks = action.payload
        },
        postTasks: (state, action) => {
            state.tasks = [action.payload, ...state.tasks]
        },
        updateTasks: (state, action) => {
            const tasksIndex = state.tasks.findIndex(
                (el) => el.id === action.payload.id
            )
            state.tasks[tasksIndex] = action.payload
        },
        updateTasksMove: (state, action: any) => {
            const updatedCategories: any = action.payload;
            state.tasks = updatedCategories;
        },
        // updateTasksMove: (state, action) => {
        //     const { fromCategoryId, toCategoryId, fromIndex, toIndex } = action.payload;
        //     const fromCategory = state.tasks.find(category => category.id === fromCategoryId);
        //     const toCategory = state.tasks.find(category => category.id === toCategoryId);
        //     if (!fromCategory || !toCategory) return;
        //     const taskMoving = fromCategory.data[fromIndex];
        //     if (!taskMoving) return;
        //     fromCategory.data.splice(fromIndex, 1);
        //     toCategory.data.splice(toIndex, 0, taskMoving);
        // },
        deleteTasks: (state, action) => {
            state.tasks = [...state.tasks.filter((el: any) => el.id !== action.payload)]
        }
    },
})
export const {
    getTasks,
    postTasks,
    updateTasks,
    updateTasksMove,
    deleteTasks
} = HomeSlice.actions
export default HomeSlice.reducer
