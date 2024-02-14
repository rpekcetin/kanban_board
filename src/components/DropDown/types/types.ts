export interface IDropDownProps {
    children: React.ReactNode,
    show: boolean,
    setShow: React.Dispatch<React.SetStateAction<boolean>>
}

export interface IActionTypes {
    children: React.ReactNode
}

export interface IItemTypes {
    children: React.ReactNode
    onClick?: () => void
}