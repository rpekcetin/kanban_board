import React from 'react'
import { IOptionsProps, ISelectProps } from './types/types'

export const Select: React.FC<ISelectProps> = ({ children }) => {
  return (
    <select>
      {children}
    </select>
  )
}

export const Options: React.FC<IOptionsProps> = ({ value, children }) => {
  return (
    <option value={value}>{children}</option>
  )
}