import React, { useEffect, useState } from 'react'
import { TaskCardProps } from './types'
import { EllipsisHorizontalIcon } from '@heroicons/react/24/outline'


const index: React.FC<TaskCardProps> = ({ task }) => {
    const [state, setState] = useState<string | undefined>()
    useEffect(() => {
        setTimeout(() => {
            setState('geldi')
        }, 3000);
    }, [0])

    return (
        <div className={`${state ?? 'animate-pulse'} shadow-md flex-1 px-4 py-4 bg-white rounded`}>
            <div className={`flex justify-between items-center`}>
                <div className={`${state ?? 'bg-slate-200'} rounded w-40 h-5`}>
                    {state}
                </div>
                <div className='text-center'>
                    <EllipsisHorizontalIcon className='h-6 w-6 font-bold cursor-pointer' />
                </div>
            </div>
            <div className={`${state ?? 'bg-slate-200'} mt-3`}>
                <div>
                    <p className='line-clamp-3'>
                        {task.mission}
                    </p>
                </div>
            </div>
            <div className={`${state ?? 'bg-slate-200'} mt-3`}>
                <div>
                    <p className='line-clamp-3'>
                        {task.status}
                    </p>
                </div>
            </div>
            <div className={`${state ?? 'bg-slate-200'} mt-3`}>
                <div>
                    <p className='line-clamp-3'>
                        {task.image}
                    </p>
                </div>
            </div>
            <div className={`${state ?? 'bg-slate-200'} mt-3`}>
                <div>
                    <p className='line-clamp-3'>
                        {task.image}
                    </p>
                </div>
            </div>
            <div className={`${state ?? 'bg-slate-200'} mt-3`}>
                <div>
                    <p className='line-clamp-3'>
                        {task.image}
                    </p>
                </div>
            </div>
            {/* {task?.mission}
            {task?.image[0]},
            {task?.worker?.image}
            {task?.startDate?.toString()}
            {task?.endDate?.toString()} */}
        </div >
    )
}

export default index