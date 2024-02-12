import React, { useEffect, useRef, useState } from 'react'
import { IDropDownProps } from './types/types'
import { useOutsideClick } from '../../hooks/useOutsideClick';

export const DropDown: React.FC<IDropDownProps> = ({ children, show, setShow }) => {
    const dropdownRef = useRef<HTMLDivElement>(null);
    useOutsideClick(dropdownRef, () => setShow(false));

    return (
        <div ref={dropdownRef} className='relative bg-red-400'>
            <div id="dropdownDelay" className={`absolute z-10 -ml-24 bg-white divide-y divide-gray-100 rounded-lg shadow w-32 dark:bg-gray-700 ${show ? '' : 'hidden'}`}>
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDelayButton">
                    {children}
                </ul>
            </div>
        </div>
    )
}

export const Action = ({ children }: any) => {
    return (
        <>
            {children}
        </>
    )
}

export const Item = ({ children, onClick }: any) => {
    return (
        <li className='cursor-pointer' onClick={onClick}>
            <span className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                {children}
            </span>
        </li>
    )
}
