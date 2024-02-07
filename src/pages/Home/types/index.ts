export interface IWorker {
    id: number,
    name: string,
    image: string,
}

export interface ITaskCard {
    id: number,
    categoryId: number,
    status: number,
    title: string,
    mission: string,
    worker: IWorker,
    image: string,
    startDate: Date,
    endDate: Date
}

export interface ICategories {
    id: number,
    name: string,
    data?: ITaskCard[] | []
}