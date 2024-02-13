import React from 'react'
import { IOptionsProps, ISelectProps } from './types/types'

export const Select: React.FC<ISelectProps> = ({ children, value, label, invalid, error, onChange }) => {
  return (
    <div className='w-full relative'>
      <label className="block text-sm ml-1 font-medium leading-6 text-gray-900">{label}</label>
      <select value={value} onChange={onChange} className="block w-full rounded-md border-0 py-1.5 px-2 py-2 text-gray-900 ring-1 outline-none ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6">
        {children}
      </select>
      {
        invalid ? (
          <label className='absolute text-xs left-1 -bottom-6 text-red-600'>
            {error}
          </label>
        ) : null
      }
    </div>
  )
}

export const Options: React.FC<IOptionsProps> = ({ value, children }) => {
  return (
    <option className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" value={value}>{children}</option>
  )
}