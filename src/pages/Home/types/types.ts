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
    status?: number[] | [],
    title?: string,
    mission?: string,
    worker?: IWorker,
    image?: string,
    startDate?: Date,
    endDate?: Date
}
export interface ICategories {
    _id: number,
    name: string,
    data?: ITaskCard[] | []
}

export interface IGetTasks {
    type: HomeActionTypes,
    payload: {
        id?: number
    }
}

export interface IPostTasks {
    type: HomeActionTypes,
    payload: {
        title: string,
        panel_id: number,
        mission: string,
        categoryId: number,
        state: number,
        image: any,
        endDate: Date,
        startDate: Date,
    }
}

export interface IDeleteTasks {
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