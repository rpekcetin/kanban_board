import { HomeActionTypes } from "../store/types"

export interface IWorker {
    id?: number,
    name?: string,
    image?: string,
}

export interface ITaskCard {
    _id?: number,
    categoryId?: number,
    position?: number,
    status?: number,
    title?: string,
    mission?: string,
    worker?: IWorker,
    image?: string,
    startDate?: Date,
    endDate?: Date
}
export interface ICategories {
    id: number,
    name: string,
    data: ITaskCard[]
}

export interface IGetTasks {
    type: HomeActionTypes,
    payload: {
        id?: number
    }
}

export interface IPostTasksPayload {
    title: string
    panel_id: string | undefined
    mission: string
    categoryId: number
    image: File | null
    endDate: string
    startDate: string
    status: number
}

export interface IPostTasks {
    type: HomeActionTypes,
    payload: IPostTasksPayload
}

export interface IDeleteTasks {
    type: HomeActionTypes,
    payload: {
        _id: string
        categoryId: number
    }
}

export interface IUpdateMoveTasks {
    type: HomeActionTypes,
    payload: {
        fromCategoryId: number,
        toCategoryId: number,
        fromIndex: number,
        toIndex: number
    }
}

export interface IUpdateMoveTaskSlice {
    type: HomeActionTypes,
    payload: ICategories[]
}

export interface ITaskInitialValues {
    tasks: ICategories[]
}

export interface ITasksPostSlice {
    type: HomeActionTypes
    payload: ITaskCard
}

export interface ITaskDeleteSlice {
    type: HomeActionTypes
    payload: ITaskCard
}