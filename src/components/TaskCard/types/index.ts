import { ITaskCard } from "../../../pages/Home/types"


export interface TaskCardProps {
    task?: ITaskCard
    isMenu?: boolean
    children?: React.ReactNode
}
