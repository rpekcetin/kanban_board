import React, { useEffect, useState } from 'react'
import { TaskCardProps } from './types'
import { ClockIcon, EllipsisHorizontalIcon } from '@heroicons/react/24/outline'
import Button from '../Button'
import moment from 'moment'

const index: React.FC<TaskCardProps> = ({ task, isMenu = false, children }) => {

    return (
        <div className={` shadow-md flex-1 px-4 py-4 bg-white rounded`}>
            {
                isMenu ?? (
                    <div className={`flex justify-between items-center`}>
                        <div className={` text-gray-800 rounded w-full h-7`}>
                            <label className='font-bold text-lg line-clamp-1'>
                                {task?.title}
                            </label>
                        </div>
                        <div className='text-center'>
                            <EllipsisHorizontalIcon className='h-6 w-6 font-bold cursor-pointer' />
                        </div>
                    </div>
                )
            }
            <div className={'mt-4'}>
                <div>
                    <p className='line-clamp-3 text-sm font-medium text-gray-800'>
                        {task?.mission}
                    </p>
                </div>
            </div>
            {children}
        </div >
    )
}

export default index