export interface IInputProps {
    label?: string
    placeholder?: string
    value?: string | number
    onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined
    invalid?: boolean | undefined
    error?: string
    name?: string,
    id?: string | undefined
    type?: string
    refImage?: React.RefObject<HTMLInputElement>
}