import { ITaskCard } from "../../../pages/Home/types/types"


export interface TaskCardProps {
    task?: ITaskCard
    isMenu?: boolean
    children?: React.ReactNode
}
