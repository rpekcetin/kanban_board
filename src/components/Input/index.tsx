import React from 'react'
import { IInputProps } from './types/types'

const index: React.FC<IInputProps> = ({ name, type = 'text', refImage, id, value, onChange, label, placeholder, invalid, error }) => {
    return (
        <div className='relative h-24'>
            <label className="block text-sm ml-1 font-medium leading-6 text-gray-900">{label}</label>
            <div className="relative mt-1 rounded-md shadow-sm">
                <input ref={refImage} defaultValue={value} onChange={onChange} type={type} name={name} accept={type === 'file' ? 'image/*' : ''} id={id} className="block w-full rounded-md border-0 py-1.5 pl-4 pr-4 text-gray-900 ring-1 outline-none ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6" placeholder={placeholder} />
            </div>
            {
                invalid ? (
                    <label className='absolute text-xs left-1 bottom-3 text-red-600'>
                        {error}
                    </label>
                ) : null
            }
        </div>
    )
}

export default index