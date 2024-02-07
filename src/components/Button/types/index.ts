export interface IButtonProps {
    name?: string,
    stats?: number,
    onClick?: () => void,
    classes?: string,
    loading?: boolean
}

export interface IThemeTypes {
    id: number,
    class: string
}