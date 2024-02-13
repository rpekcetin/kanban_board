export interface ISelectProps {
    children: React.ReactNode
    onChange?: React.ChangeEventHandler<HTMLSelectElement> | undefined
    invalid?: boolean | undefined
    error?: string
    label?: string
    value?: number
}
export interface IOptionsProps {
    children: React.ReactNode,
    value: any
}