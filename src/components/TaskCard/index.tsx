import React from 'react'
import { TaskCardProps } from './types'


const index: React.FC<TaskCardProps> = ({ task }) => {
    return (
        <div className="flex-1 bg-white rounded">
            {task.mission}
        </div>
    )
}

export default index