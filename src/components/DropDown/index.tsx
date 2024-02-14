import React, { useRef } from 'react'
import { IActionTypes, IDropDownProps, IItemTypes } from './types/types'
import { useOutsideClick } from '../../hooks/useOutsideClick';

export const DropDown: React.FC<IDropDownProps> = ({ children, show, setShow }) => {
    const dropdownRef: React.RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
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

export const Action: React.FC<IActionTypes> = ({ children }) => {
    return (
        <>
            {children}
        </>
    )
}

export const Item: React.FC<IItemTypes> = ({ children, onClick }) => {
    return (
        <li className='cursor-pointer' onClick={onClick}>
            <span className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                {children}
            </span>
        </li>
    )
}
