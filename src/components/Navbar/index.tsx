import React from 'react'

const index = () => {
    return (
        <div className="flex w-full pr-6 py-4">
            <div className='px-5 py-3 h-min bg-white rounded-md w-full flex justify-between items-center flex-row'>
                <div className='basis-3/12 flex items-center'>
                    <label className='text-center text-gray-800 text-2xl font-bold'>
                        Projects
                    </label>
                </div>
                <div className='basis-2/12 gap-x-4 flex flex-row justify-end items-center'>
                    <div className='basis-3/12 flex'>
                        <img src='./image/profile.jpg' alt='profile' className='w-14 h-14 radius-full text-center bg-red-500'/>
                    </div>
                    <div className='basis-4/12'>
                        <div className='flex flex-col'>
                            <div className=''>
                                <label className='font-bold text-sm'>
                                    name sr.R
                                </label>
                            </div>
                            <div className='-mt-1'>
                                <label className='text-xs'>
                                    name sr.R
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