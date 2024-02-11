import { HomeActionTypes } from "../store/types"

export interface IWorker {
    id?: number,
    name?: string,
    image?: string,
}

export interface ITaskCard {
    id?: number,
    categoryId?: number,
    position?: number,
    status?: number[] | [],
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
    data?: ITaskCard[] | []
}

export interface IPostTasks {
    type: HomeActionTypes,
    payload: {
        id?: number
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