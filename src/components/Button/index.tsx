import React from 'react'
import { IButtonProps, IThemeTypes } from './types'
import { colorThemes } from '../../fakeData/colorThemes'
import { Status } from '../../fakeData/status'


const index: React.FC<IButtonProps> = (props) => {
    const { name, stats, onClick, classes }: IButtonProps = props

    return (
        <button type='button' onClick={onClick} className={classes ? classes : `${colorThemes.find((el: IThemeTypes) => el.id === stats)?.class} px-4 py-1 rounded-md`}>
            <label className='font-semibold text-sm cursor-pointer'>
                {name ? name : Status?.filter((el: any) => el.id === stats)[0]?.name}
            </label>
        </button>
    )
}

export default index