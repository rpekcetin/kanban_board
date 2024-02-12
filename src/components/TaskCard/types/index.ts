import { ITaskCard } from "../../../pages/Home/types/types"


export interface TaskCardProps {
    task?: ITaskCard
    isMenu?: boolean
    children?: React.ReactNode
    modal?: boolean
    setModal?: React.Dispatch<React.SetStateAction<boolean>>
}
