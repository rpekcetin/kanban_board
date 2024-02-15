import React from 'react'
import { useParams } from 'react-router-dom'

const index = () => {
    const { id } = useParams()

    return (
        <div className="flex w-full pr-6 py-4">
            <div className='px-5 py-3 h-min bg-white rounded-md w-full flex justify-between items-center flex-row'>
                <div className='basis-3/12 flex items-center'>
                    <label className='text-center text-gray-800 text-2xl font-bold'>
                        {id ? 'Project' : 'Panels'}
                    </label>
                </div>
                <div className='basis-9/12 gap-x-4 flex flex-row justify-end items-center'>
                    <div className='flex'>
                        <img src='./image/profile.webp' alt='profile' className='w-14 h-14 text-center' />
                    </div>
                    <div>
                        <div className='flex flex-col'>
                            <div className=''>
                                <label className='font-bold text-sm'>
                                    Recep Pekçetin
                                </label>
                            </div>
                            <div className='-mt-1'>
                                <label className='text-xs'>
                                    FrontEnd Developer
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default index