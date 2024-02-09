import React, { useEffect, useState } from 'react'
import { TaskCardProps } from './types'
import { ClockIcon, EllipsisHorizontalIcon } from '@heroicons/react/24/outline'
import Button from '../Button'
import moment from 'moment'

const index: React.FC<TaskCardProps> = ({ task }) => {
    const [state, setState] = useState<string | undefined>()
    useEffect(() => {
        setTimeout(() => {
            setState('geldi')
        }, 3000);
    }, [0])

    return (
        <div className={` shadow-md flex-1 px-4 py-4 bg-white rounded`}>
            <div className={`flex justify-between items-center`}>
                <div className={` text-gray-800 rounded w-full h-7`}>
                    <label className='font-bold text-lg line-clamp-1'>
                        {task.title}
                    </label>
                </div>
                <div className='text-center'>
                    <EllipsisHorizontalIcon className='h-6 w-6 font-bold cursor-pointer' />
                </div>
            </div>
            <div className={'mt-4'}>
                <div>
                    <p className='line-clamp-3 text-sm font-medium text-gray-800'>
                        {task.mission}
                    </p>
                </div>
            </div>
            <div className={`mt-4`}>
                {
                    task?.status?.map((stats: number, index: number) => (
                        <div key={`status-button-${index}`}>
                            <Button
                                stats={stats}
                            />
                        </div>
                    ))
                }
            </div>
            <div className={`w-full mt-3`}>
                <div className='w-full'>
                    <div className="bg-no-repeat rounded-lg bg-cover bg-bottom w-full h-44" style={{ backgroundImage: `url('/image/example-1.webp')` }} />
                </div>
            </div>
            <div className='mt-5 w-full flex flex-row items-center justify-between'>
                <div className=''>
                    <div className="bg-no-repeat rounded-full bg-cover w-11 h-11" style={{ backgroundImage: `url('/image/profile.jpg')` }} />
                </div>
                <div className={`gap-1 flex items-center justify-end`}>
                    <ClockIcon className='h-6 w-6 stroke-gray-600' />
                    <p className='text-sm text-gray-600 font-semibold'>
                        {`${moment(task.endDate).format('DD')}-${moment(task.startDate).format('DD')} ${moment(task.endDate).format('MMM')}`}
                    </p>
                </div>
            </div>
        </div >
    )
}

export default index