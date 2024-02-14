export interface IModalProps {
    children: React.ReactNode
    modal: boolean
    setModal: React.Dispatch<React.SetStateAction<boolean>>
    title?: string
    onSubmit: () => void
    successTitle?: string
    width?: 'w-screen' | 'w-full' | 'w-auto'
}