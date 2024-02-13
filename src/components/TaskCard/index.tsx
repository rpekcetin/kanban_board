import React, { useState } from 'react'
import { TaskCardProps } from './types'
import { ArrowPathIcon, EllipsisHorizontalIcon, TrashIcon } from '@heroicons/react/24/outline'
import { Action, DropDown, Item } from '../DropDown'
import { DispatchProp, useDispatch } from 'react-redux'
import { HomeTypes } from '../../pages/Home/store/types'

const index: React.FC<TaskCardProps> = ({ task, isMenu = false, children, modal, setModal }) => {
    const [show, setShow] = useState<boolean>(false)
    const dispatch = useDispatch()

    const handleDelete = () => {
        dispatch({
            type: HomeTypes.DELETE_TASKS,
            payload: {
                _id: task?._id,
                categoryId: task?.categoryId
            }
        })
        setShow(false)
    }
    console.log(task?._id)
    return (
        <div className={`relative shadow-md flex-1 bg-white rounded`}>
            {
                isMenu ? (
                    <div className={`flex justify-between items-center px-4 py-4`}>
                        <div className={` text-gray-800 rounded w-full h-7`}>
                            <label className='font-bold text-lg line-clamp-1'>
                                {task?.title}
                            </label>
                        </div>
                        <div className='flex-1 z-10'>
                            <Action>
                                <div className='text-center' onClick={() => setShow(!show)}>
                                    <EllipsisHorizontalIcon className='h-6 w-6 font-bold cursor-pointer' />
                                </div>
                            </Action>
                            <DropDown show={show} setShow={setShow}>
                                <Item onClick={handleDelete}>
                                    <div className='flex justify-start items-center gap-2'>
                                        <TrashIcon className='w-6 h-6 stroke-red-500' />
                                        <label className='text-md font-semibold'>
                                            Sil
                                        </label>
                                    </div>
                                </Item>
                            </DropDown>
                        </div>
                    </div>
                ) : null
            }
            <div className={'mt-2 px-4'}>
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