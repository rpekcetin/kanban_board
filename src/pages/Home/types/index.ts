export interface ITaskCard {
    id: number,
    categoryId: number,
    status: number,
    title: string,
    mission: string,
    workerId: number,
    workerName: string,
    image: string[]
}

export interface ICategories {
    id: number,
    name: string,
    data?: ITaskCard[] | []
}