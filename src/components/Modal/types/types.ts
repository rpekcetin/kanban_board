export interface IModalProps {
    children: React.ReactNode
    modal: boolean
    setModal: React.Dispatch<React.SetStateAction<boolean>>
    title?: string
    onSubmit?: any
    successTitle?:any
}